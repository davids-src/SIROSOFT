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
    secure: process.env.SMTP_SECURE === "true" || Number(process.env.SMTP_PORT) === 465,
    auth:
      process.env.SMTP_USER && process.env.SMTP_PASS
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
  });

  const services = body.services.length ? body.services.join(", ") : "—";
  const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER;
  const adminEmail = process.env.SIROVED_ADMIN_EMAIL || "info@sirosoft.hu";

  const adminHtml = `
    <div style="font-family: Arial, sans-serif; background-color: #0A0A0C; color: #E5E7EB; padding: 30px; border-radius: 8px;">
      <h2 style="color: #1AE87B; margin-bottom: 20px;">Új projekt-megkeresés (SIROSOFT)</h2>
      <table style="width: 100%; border-collapse: collapse; text-align: left;">
        <tr><td style="padding: 10px; border-bottom: 1px solid #333;"><strong>Cég:</strong></td><td style="padding: 10px; border-bottom: 1px solid #333;">${body.company}</td></tr>
        <tr><td style="padding: 10px; border-bottom: 1px solid #333;"><strong>Név:</strong></td><td style="padding: 10px; border-bottom: 1px solid #333;">${body.contact_name}</td></tr>
        <tr><td style="padding: 10px; border-bottom: 1px solid #333;"><strong>E-mail:</strong></td><td style="padding: 10px; border-bottom: 1px solid #333;">${body.email}</td></tr>
        <tr><td style="padding: 10px; border-bottom: 1px solid #333;"><strong>Telefon:</strong></td><td style="padding: 10px; border-bottom: 1px solid #333;">${body.phone || "—"}</td></tr>
        <tr><td style="padding: 10px; border-bottom: 1px solid #333;"><strong>Szolgáltatások:</strong></td><td style="padding: 10px; border-bottom: 1px solid #333;">${services}</td></tr>
        <tr><td style="padding: 10px; border-bottom: 1px solid #333;"><strong>Büdzsé:</strong></td><td style="padding: 10px; border-bottom: 1px solid #333;">${body.budget || "—"}</td></tr>
      </table>
      <h3 style="color: #1AE87B; margin-top: 20px;">Leírás:</h3>
      <p style="background-color: #121214; padding: 15px; border-radius: 6px; border: 1px solid #333;">${body.description || "—"}</p>
    </div>
  `;

  const userHtml = `
    <div style="font-family: Arial, sans-serif; background-color: #ffffff; color: #333333; padding: 30px; border-radius: 8px; border: 1px solid #eaeaea;">
      <h2 style="color: #0A0A0C;">Kedves ${body.contact_name}!</h2>
      <p style="font-size: 16px; line-height: 1.6;">Köszönjük, hogy megkerestél minket! A megadott adatokat (<strong>${body.company}</strong>) sikeresen rögzítettük rendszerünkben.</p>
      <p style="font-size: 16px; line-height: 1.6;">Szakértő csapatunk hamarosan feldolgozza a kérést, és felveszi veled a kapcsolatot a megadott elérhetőségeiden.</p>
      <br />
      <p style="font-size: 16px; line-height: 1.6;">Üdvözlettel,<br/><strong style="color: #1AE87B;">SIROSOFT Csapat</strong></p>
      <hr style="border: none; border-top: 1px solid #eaeaea; margin: 30px 0;" />
      <p style="font-size: 12px; color: #888;">Ez egy automatikusan generált e-mail. További információkért látogass el a <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://sirosoft.hu'}" style="color: #1AE87B; text-decoration: none;">weboldalunkra</a>.</p>
    </div>
  `;

  // Send to Admin
  await transporter.sendMail({
    from: fromEmail,
    to: adminEmail,
    replyTo: body.email,
    subject: `SIROSOFT – Új megkeresés: ${body.company}`,
    html: adminHtml,
  });

  // Send to User (auto-reply)
  await transporter.sendMail({
    from: fromEmail,
    to: body.email,
    subject: `Megkaptuk az üzeneted – SIROSOFT`,
    html: userHtml,
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
