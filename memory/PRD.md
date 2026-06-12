# SIROSOFT – Product Requirements (PRD)

## Original Problem Statement
Build SIROSOFT, the standalone marketing website for the software development division of SIROTECH.
Hungarian-language single-page site to generate project leads. Dark premium tech aesthetic: black background,
red (#E8271A) primary accent, electric green (#1AE87B) secondary "system/terminal" accent. Signature element:
animated terminal/IDE typewriter mockup in the hero.

## Architecture
- Frontend: React 19 (CRA/craco) + Tailwind CSS + framer-motion + lucide-react. Single page assembled in `App.js`.
- Backend: FastAPI + MongoDB (motor). `POST /api/contact`, `GET /api/contact`, `/api/status`.
- Email: SMTP via smtplib (OFF by default; configurable via SMTP_* env). Submissions always persist to Mongo.
- Content centralized in `src/data/content.js` (prepared for future HU/EN i18n).

## User Personas
- Primary: SME owners/managers hitting a growth wall, wanting software to fix it.
- Secondary: IT decision-makers / ops leads looking for a concrete system.

## Core Requirements (static)
- Sticky navbar (services dropdown, HU/EN toggle, CTA), Hero (terminal typewriter), Services (6 alternating rows),
  Process (5 steps), Tech stack grid, References (3 cards), Why-SIROSOFT grid, Contact CTA banner, Contact form, Footer.
- Hungarian copy throughout; dark theme; red+green accents; Space Grotesk / Inter / JetBrains Mono fonts.

## Implemented (2026-06-12)
- Full single-page site with all sections, animated terminal, scroll reveals, hover glows.
- Working contact form with client-side validation (noValidate + custom HU errors) posting to backend; saves to MongoDB.
- Backend contact endpoints with EmailStr validation; SMTP email-ready (disabled until creds provided).
- Tested: backend 7/7 pytest pass; frontend ~95% (email validation fix applied).

## Backlog / Remaining
- P1: Wire real SMTP/email credentials (user to provide) so leads are emailed.
- P1: Final contact details (phone/email) — currently placeholder.
- P2: EN locale (i18n) — toggle present but disabled.
- P2: SIROSOFT logo SVG (placeholder mark in place).
- P3 (future_scope): case study pages, blog, quote calculator, client portal, OG image + structured data SEO.

## Next Tasks
1. Collect SMTP creds + real contact info from user, enable email.
2. Add EN translations and activate language toggle.
