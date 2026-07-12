# SIROSOFT – Product Requirements (PRD)

## Original Problem Statement
SIROSOFT – standalone Hungarian marketing website for the software development division of SIROTECH.
Single-page lead-generation site. Dark premium tech aesthetic: black background, red (#E8271A) primary
accent, electric green (#1AE87B) secondary "system/terminal" accent. Signature element: animated terminal
typewriter mockup in the hero.

## Current Architecture (as of 2026-07-12) — Next.js at repo root
- **Framework: Next.js 14 (App Router) + TypeScript (strict) + Tailwind CSS.**
- Animations: framer-motion. Icons: lucide-react. Toasts: sonner. Fonts via next/font (Space Grotesk, Inter, JetBrains Mono).
- **Backend integrated into Next.js**: `src/app/api/contact/route.ts` (Node runtime) — Nodemailer email + optional MongoDB persistence (both env-gated). No separate FastAPI service.
- Content centralized in `src/data/content.ts` (prepared for future HU/EN i18n).
- **Target: self-hosted (own server / VPS), NOT Emergent preview.** The old CRA frontend + FastAPI backend and supervisor-managed preview were removed during the restructure. Emergent preview no longer runs.

### Repo layout (root)
```
/app
├── src/app/            layout.tsx, page.tsx, globals.css, api/contact/route.ts
├── src/components/      Navbar, Hero, Terminal, Services, Process, TechStack, References, WhySirosoft, ContactCTA, Contact, Footer, Logo, Reveal, SectionHeading, SonnerToaster, icons.ts
├── src/data/content.ts
├── src/lib/            scroll.ts, mongodb.ts
├── package.json, tsconfig.json, next.config.mjs, tailwind.config.ts, postcss.config.js, .eslintrc.json
├── .env.local.example, README.md
└── memory/, .git, .emergent
```

## User Personas
- Primary: SME owners/managers hitting a growth wall, wanting software to fix it.
- Secondary: IT decision-makers / ops leads looking for a concrete system.

## Core Requirements (static)
- Sticky navbar (services dropdown, HU/EN toggle, CTA), Hero (terminal typewriter), Services (6 alternating rows),
  Process (5 steps), Tech stack grid, References (3 cards), Why-SIROSOFT grid, Contact CTA banner, Contact form, Footer.
- Hungarian copy; dark theme; red+green accents; Space Grotesk / Inter / JetBrains Mono.

## Implemented
- 2026-06-12: Full single-page site (originally CRA + FastAPI), TS migration, contact form + validation.
- 2026-07-12: Full rewrite to Next.js 14 + TS; contact API via Nodemailer (+optional MongoDB); repo restructured with Next.js at root; old CRA/FastAPI removed. `yarn build` + `yarn start` verified (home 200, /api/contact 200/422). Committed: "restructure: move Next.js to repo root".

## Backlog / Remaining
- P1: Configure real SMTP creds (.env.local) so leads are emailed; final contact phone/email.
- P2: EN locale (i18n) — toggle present but disabled.
- P2: SIROSOFT logo SVG (placeholder mark in place).
- P3 (future_scope): case study pages, blog, quote calculator, client portal, structured data/OG image.

## Next Tasks
1. Push commit to GitHub via the Emergent "Save to GitHub" feature (no git remote configured locally).
2. Self-host: `yarn install && yarn build && yarn start`, reverse proxy (Nginx) + TLS for sirosoft.hu.
3. Fill SMTP + contact details; add EN translations.
