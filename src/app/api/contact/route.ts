import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getDb } from "@/lib/mongodb";

export const runtime = "nodejs";

interface ContactPayload {
  company?: string;
  contact_name?: string;
  email?: string;
  phone?: string;
  services?: string[];
  description?: string;
  budget?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body: ContactPayload): string | null {
  if (!body.company?.trim()) return "A cégnév megadása kötelező.";
  if (!body.contact_name?.trim()) return "A kapcsolattartó neve kötelező.";
  if (!body.email?.trim()) return "Az e-mail cím megadása kötelező.";
  if (!EMAIL_RE.test(body.email)) return "Érvénytelen e-mail cím.";
  return null;
}

async function sendEmail(body: Required<ContactPayload>): Promise<boolean> {
  const host = process.env.SMTP_HOST?.trim();
  if (!host) return false;

  const transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth:
      process.env.SMTP_USER && process.env.SMTP_PASS
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
  });

  const services = body.services.length ? body.services.join(", ") : "—";
  const text = [
    "Új projekt-megkeresés érkezett a SIROSOFT weboldalról.",
    "",
    `Cégnév: ${body.company}`,
    `Kapcsolattartó: ${body.contact_name}`,
    `E-mail: ${body.email}`,
    `Telefon: ${body.phone || "—"}`,
    `Szükséges fejlesztés: ${services}`,
    `Tervezett büdzsé: ${body.budget || "—"}`,
    "",
    "Leírás:",
    body.description || "—",
  ].join("\n");

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_TO || "info@sirosoft.hu",
    replyTo: body.email,
    subject: `SIROSOFT – Új megkeresés: ${body.company}`,
    text,
  });
  return true;
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Hibás kérés." }, { status: 400 });
  }

  const error = validate(body);
  if (error) {
    return NextResponse.json({ error }, { status: 422 });
  }

  const record = {
    company: body.company!.trim(),
    contact_name: body.contact_name!.trim(),
    email: body.email!.trim(),
    phone: body.phone?.trim() || "",
    services: body.services || [],
    description: body.description?.trim() || "",
    budget: body.budget || "",
    created_at: new Date().toISOString(),
  };

  // Opcionális mentés MongoDB-be
  try {
    const db = await getDb();
    if (db) {
      await db.collection("contacts").insertOne({ ...record });
    }
  } catch (e) {
    console.error("MongoDB mentés sikertelen:", e);
  }

  // E-mail küldés (Nodemailer)
  let emailed = false;
  try {
    emailed = await sendEmail(record as Required<ContactPayload>);
  } catch (e) {
    console.error("E-mail küldés sikertelen:", e);
  }

  return NextResponse.json({ success: true, emailed }, { status: 200 });
}
