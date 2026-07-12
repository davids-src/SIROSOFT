# SIROSOFT – Test Credentials & Notes

No authentication in this app (public marketing site).

## Backend
- `POST /api/contact` – saves contact submissions to MongoDB `contacts` collection.
  Required fields: company, contact_name, email. Optional: phone, services[], description, budget.
  Returns the created contact. `emailed` is true only when SMTP_* env vars are configured.
- `GET /api/contact` – lists submissions (newest first).

## Email (SMTP)
Email sending is OFF by default (SMTP_HOST empty in backend/.env).
Submissions are always saved to DB regardless. To enable real email, fill SMTP_HOST/PORT/USER/PASS/FROM and CONTACT_TO.
