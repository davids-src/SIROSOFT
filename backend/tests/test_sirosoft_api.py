"""Backend API tests for SIROSOFT website - contact form and basic endpoints."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # fallback to frontend .env loaded value, read directly
    from pathlib import Path
    env_file = Path("/app/frontend/.env")
    if env_file.exists():
        for line in env_file.read_text().splitlines():
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip()
                break
BASE_URL = BASE_URL.rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------------- Root / Health ----------------
def test_api_root(session):
    r = session.get(f"{API}/", timeout=15)
    assert r.status_code == 200
    data = r.json()
    assert "message" in data


# ---------------- Contact ----------------
def test_contact_create_valid(session):
    payload = {
        "company": "TEST_Példa Kft.",
        "contact_name": "TEST Teszt Elek",
        "email": "test_valid@example.com",
        "phone": "+36 30 123 4567",
        "services": ["Weboldal fejlesztés", "CRM fejlesztés"],
        "description": "TEST automated description",
        "budget": "500.000 – 1.500.000 Ft",
    }
    r = session.post(f"{API}/contact", json=payload, timeout=20)
    assert r.status_code == 200, r.text
    data = r.json()
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert data["company"] == payload["company"]
    assert data["contact_name"] == payload["contact_name"]
    assert data["email"] == payload["email"]
    assert data["services"] == payload["services"]
    # Email is intentionally disabled (no SMTP)
    assert data["emailed"] is False
    assert "created_at" in data
    assert "_id" not in data  # Mongo _id should not leak


def test_contact_minimum_required_fields(session):
    payload = {
        "company": "TEST_Minimal",
        "contact_name": "TEST Name",
        "email": "test_min@example.com",
    }
    r = session.post(f"{API}/contact", json=payload, timeout=20)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["company"] == "TEST_Minimal"
    assert data["services"] == []
    assert data["emailed"] is False


def test_contact_invalid_email(session):
    payload = {
        "company": "TEST_BadEmail",
        "contact_name": "TEST Name",
        "email": "not-an-email",
    }
    r = session.post(f"{API}/contact", json=payload, timeout=20)
    assert r.status_code == 422


def test_contact_missing_required(session):
    payload = {"email": "missing@example.com"}
    r = session.post(f"{API}/contact", json=payload, timeout=20)
    assert r.status_code == 422


def test_contact_empty_required_strings(session):
    payload = {"company": "", "contact_name": "", "email": "x@y.com"}
    r = session.post(f"{API}/contact", json=payload, timeout=20)
    # min_length=1 enforced => 422
    assert r.status_code == 422


def test_contact_list_persistence(session):
    # Create a unique contact then ensure it appears in GET list
    marker = "TEST_persistence_marker"
    payload = {
        "company": marker,
        "contact_name": "TEST Persist",
        "email": "test_persist@example.com",
        "services": ["Mobilalkalmazás"],
    }
    cr = session.post(f"{API}/contact", json=payload, timeout=20)
    assert cr.status_code == 200
    created_id = cr.json()["id"]

    r = session.get(f"{API}/contact", timeout=20)
    assert r.status_code == 200
    items = r.json()
    assert isinstance(items, list)
    matched = [c for c in items if c.get("id") == created_id]
    assert len(matched) == 1
    assert matched[0]["company"] == marker
    # ensure no Mongo _id leak in list
    for c in items:
        assert "_id" not in c
