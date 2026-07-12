# SIROSOFT – Next.js 14 + TypeScript

A SIROSOFT szoftverfejlesztési brand marketing weboldala. **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, saját szerverről hostolható.

## Technológiák
- **Next.js 14** (App Router, SSR)
- **TypeScript** (strict)
- **Tailwind CSS**
- **Framer Motion** – animációk (terminál typewriter, scroll reveal, hover)
- **lucide-react** – ikonok
- **sonner** – toast értesítések
- **Nodemailer** – kapcsolati űrlap e-mail küldés
- **MongoDB** (opcionális) – megkeresések mentése

## Fejlesztés

```bash
yarn install       # függőségek telepítése
cp .env.local.example .env.local   # környezeti változók
yarn dev           # fejlesztői szerver → http://localhost:3000
```

## Production build & indítás

```bash
yarn build
yarn start         # alapból a 3000-es porton
# egyedi port: PORT=8080 yarn start
```

## Környezeti változók (`.env.local`)

| Változó | Leírás |
|---|---|
| `SMTP_HOST` | SMTP szerver host (ha üres, nincs e-mail küldés) |
| `SMTP_PORT` | SMTP port (pl. 587 vagy 465) |
| `SMTP_USER` | SMTP felhasználó |
| `SMTP_PASS` | SMTP jelszó |
| `SMTP_FROM` | Feladó e-mail cím |
| `CONTACT_TO` | Címzett (ahova a megkeresések érkeznek) |
| `MONGODB_URI` | Opcionális – ha megadod, a megkeresések a `contacts` gyűjteménybe mentődnek |
| `MONGODB_DB` | Adatbázis neve (alap: `sirosoft`) |

> Ha az `SMTP_HOST` üres, az űrlap akkor is működik (200 választ ad), csak nem küld e-mailt. Ha `MONGODB_URI` üres, nem ment adatbázisba.

## Struktúra

```
src/
├── app/
│   ├── layout.tsx           # fontok (next/font), metaadatok, HU nyelv
│   ├── page.tsx             # főoldal – szekciók összefűzése
│   ├── globals.css          # Tailwind + téma (sötét, piros/zöld accent)
│   └── api/contact/route.ts # POST /api/contact – Nodemailer + MongoDB
├── components/              # UI komponensek (Navbar, Hero, Services, ...)
├── data/content.ts          # központi magyar tartalom (i18n-re előkészítve)
└── lib/                     # scroll segéd + MongoDB kliens
```

## Saját szerverre telepítés (röviden)

1. `yarn build` a szerveren (Node 18.17+ vagy 20).
2. `yarn start` folyamatként (pl. `pm2 start "yarn start" --name sirosoft`).
3. Reverse proxy (Nginx) a 3000-es portra, TLS-sel (Cloudflare / Let's Encrypt).

## Deployment megjegyzés
Az oldal API route-ja (`/api/contact`) Node.js runtime-ot igényel, ezért teljes Next.js szerver szükséges (nem statikus export).

© 2026 SIROSOFT – SIROTECH Informatikai és Biztonságtechnikai Kft.
