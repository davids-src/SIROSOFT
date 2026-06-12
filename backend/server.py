from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import ssl
import asyncio
import smtplib
import logging
from email.mime.text import MIMEText
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional, Annotated
from bson import ObjectId
from pydantic import BeforeValidator
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="SIROSOFT API")
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger("sirosoft")

PyObjectId = Annotated[str, BeforeValidator(str)]


# ---------------- Models ----------------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactCreate(BaseModel):
    company: str = Field(..., min_length=1)
    contact_name: str = Field(..., min_length=1)
    email: EmailStr
    phone: Optional[str] = ""
    services: List[str] = Field(default_factory=list)
    description: Optional[str] = ""
    budget: Optional[str] = ""


class Contact(ContactCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    emailed: bool = False


# ---------------- Email ----------------
def _send_email_sync(contact: Contact) -> bool:
    host = os.environ.get("SMTP_HOST", "").strip()
    if not host:
        return False
    port = int(os.environ.get("SMTP_PORT", "587"))
    user = os.environ.get("SMTP_USER", "").strip()
    password = os.environ.get("SMTP_PASS", "").strip()
    sender = os.environ.get("SMTP_FROM", user).strip()
    recipient = os.environ.get("CONTACT_TO", "info@sirosoft.hu").strip()

    services = ", ".join(contact.services) if contact.services else "—"
    body = (
        "Új projekt-megkeresés érkezett a SIROSOFT weboldalról.\n\n"
        f"Cégnév: {contact.company}\n"
        f"Kapcsolattartó: {contact.contact_name}\n"
        f"E-mail: {contact.email}\n"
        f"Telefon: {contact.phone or '—'}\n"
        f"Szükséges fejlesztés: {services}\n"
        f"Tervezett büdzsé: {contact.budget or '—'}\n\n"
        f"Leírás:\n{contact.description or '—'}\n\n"
        f"Beérkezett: {contact.created_at}\n"
    )
    msg = MIMEText(body, "plain", "utf-8")
    msg["Subject"] = f"SIROSOFT – Új megkeresés: {contact.company}"
    msg["From"] = sender
    msg["To"] = recipient
    msg["Reply-To"] = contact.email

    try:
        context = ssl.create_default_context()
        with smtplib.SMTP(host, port, timeout=15) as server:
            server.starttls(context=context)
            if user and password:
                server.login(user, password)
            server.sendmail(sender, [recipient], msg.as_string())
        return True
    except Exception as exc:  # noqa: BLE001
        logger.error("Email küldés sikertelen: %s", exc)
        return False


async def send_contact_email(contact: Contact) -> bool:
    try:
        return await asyncio.to_thread(_send_email_sync, contact)
    except Exception as exc:  # noqa: BLE001
        logger.error("Email szál hiba: %s", exc)
        return False


# ---------------- Routes ----------------
@api_router.get("/")
async def root():
    return {"message": "SIROSOFT API él."}


@api_router.post("/contact", response_model=Contact)
async def create_contact(payload: ContactCreate):
    contact = Contact(**payload.model_dump())
    emailed = await send_contact_email(contact)
    contact.emailed = emailed
    await db.contacts.insert_one(contact.model_dump())
    logger.info("Új kapcsolat mentve: %s (email küldve: %s)", contact.company, emailed)
    return contact


@api_router.get("/contact", response_model=List[Contact])
async def list_contacts():
    docs = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return docs


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
