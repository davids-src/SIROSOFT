// SIROSOFT – központi magyar tartalom (későbbi i18n-re előkészítve)

export type Accent = "red" | "green";

export interface ServiceRow {
  id: string;
  title: string;
  accent: Accent;
  icon: string;
  headline: string;
  body: string;
  bullets: string[];
  cta: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  body: string;
}

export interface TechCategory {
  label: string;
  items: string[];
}

export interface ReferenceCard {
  name: string;
  industry: string;
  description: string;
  tech: string[];
}

export interface WhyItem {
  icon: string;
  title: string;
  body: string;
}

export interface ContactDetail {
  icon: string;
  value: string;
}

export const SECTION_IDS = {
  hero: "hero",
  services: "szolgaltatasok",
  process: "folyamat",
  tech: "technologiak",
  references: "referenciak",
  why: "miert",
  contact: "kapcsolat",
} as const;

export const NAV = {
  servicesLabel: "Szolgáltatások",
  servicesDropdown: [
    { label: "Webfejlesztés", id: "webdev" },
    { label: "Belső rendszerek", id: "internal_systems" },
    { label: "CRM fejlesztés", id: "crm" },
    { label: "ERP fejlesztés", id: "erp" },
    { label: "Mobilalkalmazás", id: "mobile_app" },
    { label: "Egyedi szoftver", id: "custom_software" },
  ] as { label: string; id: string }[],
  links: [
    { label: "Referenciák", target: SECTION_IDS.references },
    { label: "Folyamat", target: SECTION_IDS.process },
    { label: "Rólunk", target: SECTION_IDS.why },
    { label: "Kapcsolat", target: SECTION_IDS.contact },
  ] as { label: string; target: string }[],
  cta: "Projektet indítok →",
};

export const HERO = {
  eyebrow: "SIROSOFT — Egyedi szoftverfejlesztés",
  headline: ["A szoftver amit", "keresel, még nem", "létezik. Mi megírjuk."],
  subheadline:
    "Weboldaltól ERP rendszerig, mobilapptól belső ügyviteli platformig — minden megoldást az ügyfél folyamataira szabunk. Nem sablon. Nem kompromisszum.",
  primaryCta: "Projekt megbeszélése →",
  secondaryCta: "Referenciáink",
  terminalLines: [
    "> project_init: új_ügyviteli_rendszer",
    "> analyzing: jelenlegi_folyamatok",
    "> modules_planned: 7",
    "> stack: Next.js · Node.js · MongoDB",
    "> timeline: 12_hét",
    "> status: FEJLESZTÉS ALATT ██████░░ 75%",
  ],
  trustStrip: [
    "Next.js / React",
    "Node.js / Python",
    "MongoDB / PostgreSQL",
    "Docker / VPS",
    "REST API / Integráció",
  ],
};

export const SERVICES: { eyebrow: string; headline: string; rows: ServiceRow[] } = {
  eyebrow: "SZOLGÁLTATÁSOK",
  headline: "Mit fejlesztünk",
  rows: [
    {
      id: "webdev",
      title: "Webfejlesztés",
      accent: "red",
      icon: "globe",
      headline: "Gyors, modern, konverziós weboldalak",
      body: "Egyedi tervezésű és fejlesztésű weboldalak vállalkozásoknak. Nem WordPress sablon — hanem Next.js alapú, villámgyors, SEO-optimalizált, mobilbarát megoldás. Webshoptól landing page-ig.",
      bullets: [
        "Egyedi design és frontend fejlesztés",
        "Next.js / React alapú, nagy teljesítményű",
        "CMS integráció (saját vagy headless)",
        "Webshop fejlesztés és integráció",
      ],
      cta: "Weboldalat kérek →",
    },
    {
      id: "internal_systems",
      title: "Belső rendszerek",
      accent: "green",
      icon: "layout-dashboard",
      headline: "Amit eddig Excelben vezettél, most rendszerben fut",
      body: "Ügyviteli szoftverek, belső platformok, adatkezelő rendszerek — a cég saját folyamataira szabva. Raktárkezeléstől munkaóra-nyilvántartásig, dokumentumkezeléstől jóváhagyási workflow-ig.",
      bullets: [
        "Egyedi webalapú ügyviteli rendszer",
        "Szerepkör alapú jogosultságkezelés",
        "Import/export, riportok, dashboardok",
        "Meglévő rendszerekbe integrálható",
      ],
      cta: "Belső rendszert tervezünk →",
    },
    {
      id: "crm",
      title: "CRM fejlesztés",
      accent: "red",
      icon: "users",
      headline: "Ügyfélkezelés, ami tényleg az üzleted logikáját követi",
      body: "Nem veszel drága licenszt egy feleslegesen komplex rendszerhez — mi megírjuk azt a CRM-et, ami pontosan azt tudja, amire szükséged van. Kapcsolatkezelés, ajánlatok, feladatok, értékesítési pipeline — mind egy helyen.",
      bullets: [
        "Egyedi pipeline és státusz logika",
        "Ajánlat- és szerződéskezelés",
        "Integráció számlázóval, emailel, naptárral",
        "Mobil nézet, bárhonnan elérhető",
      ],
      cta: "CRM projektet indítok →",
    },
    {
      id: "erp",
      title: "ERP fejlesztés",
      accent: "green",
      icon: "server",
      headline: "Vállalati szintű rendszer, kkv áron",
      body: "Moduláris ERP megoldások gyártó, kereskedő és szolgáltató cégeknek. Raktár, beszerzés, termelés, HR, pénzügyi modul — csak azt fejlesztjük, amire tényleg szükség van. Fokozatosan bővíthető.",
      bullets: [
        "Moduláris felépítés, fázisos bevezetés",
        "Raktár- és készletkezelés",
        "Beszerzés, rendelések, szállítók",
        "Riportok, KPI dashboard, exportok",
      ],
      cta: "ERP konzultációt kérek →",
    },
    {
      id: "mobile_app",
      title: "Mobilalkalmazás",
      accent: "red",
      icon: "smartphone",
      headline: "iOS és Android — egy kódbázisból",
      body: "React Native alapú mobilalkalmazások, amelyek iOS-en és Androidon egyaránt natív élményt nyújtanak. Belső vállalati appektól ügyfél-facing megoldásokig.",
      bullets: [
        "React Native — iOS + Android egyszerre",
        "Offline működés támogatása",
        "Push értesítések, kamera, GPS integráció",
        "App Store / Play Store közzététel",
      ],
      cta: "App fejlesztést tervezünk →",
    },
    {
      id: "custom_software",
      title: "Egyedi szoftver",
      accent: "green",
      icon: "code-2",
      headline: "Ha a kész megoldások egyike sem illik",
      body: "API integrációk, automatizációk, adatfeldolgozó pipeline-ok, speciális iparági szoftverek, meglévő rendszerek bővítése — ha valami egyedi megoldást igényel, megírjuk.",
      bullets: [
        "REST API fejlesztés és integráció",
        "Automatizációk, ütemezett folyamatok",
        "Meglévő rendszer bővítése, refaktorálása",
        "Külső szolgáltatások összekötése",
      ],
      cta: "Igényt egyeztetünk →",
    },
  ],
};

export const PROCESS: { eyebrow: string; headline: string; steps: ProcessStep[] } = {
  eyebrow: "FOLYAMAT",
  headline: "Hogyan dolgozunk együtt",
  steps: [
    { number: "01", title: "Igényfelmérés", body: "Ingyenes konzultáció — megértjük a folyamataidat, céljaidat és korlátaidat." },
    { number: "02", title: "Specifikáció", body: "Részletes funkcionális leírás, képernyőtervek, technikai architektúra." },
    { number: "03", title: "Fejlesztés", body: "Sprint alapú fejlesztés, rendszeres demók — mindig látod, hol tartunk." },
    { number: "04", title: "Tesztelés & átadás", body: "Alapos QA, éles indítás, oktatás és dokumentáció." },
    { number: "05", title: "Üzemeltetés", body: "Opcionális karbantartás és fejlesztés a SIRONIC keretein belül — ha kell, ott vagyunk." },
  ],
};

export const TECH: { eyebrow: string; headline: string; categories: TechCategory[] } = {
  eyebrow: "TECHNOLÓGIÁK",
  headline: "Amivel dolgozunk",
  categories: [
    { label: "Frontend", items: ["Next.js", "React", "React Native", "TypeScript", "Tailwind CSS"] },
    { label: "Backend", items: ["Node.js", "Python", "REST API", "GraphQL"] },
    { label: "Adatbázis", items: ["MongoDB", "PostgreSQL", "Redis"] },
    { label: "Infrastruktúra", items: ["Docker", "VPS / Linux", "Cloudflare", "Nginx"] },
    { label: "Integráció", items: ["Billingo API", "Stripe / SimplePay", "SendGrid / Resend", "Google APIs"] },
  ],
};

export const REFERENCES: { eyebrow: string; headline: string; cards: ReferenceCard[] } = {
  eyebrow: "REFERENCIÁK",
  headline: "Amit már megcsináltunk",
  cards: [
    {
      name: "SIROTECH CRM & Partner Portal",
      industry: "IT szolgáltatás",
      description: "Egyedi CRM rendszer modulokkal: kapcsolatok, projektek, ticketek, munkanaplók, raktár, ajánlatok, számlák (Billingo integráció), szerződések.",
      tech: ["Next.js", "MongoDB", "Docker", "TypeScript", "Billingo API"],
    },
    {
      name: "Mélyépítési ERP javaslat",
      industry: "Építőipar",
      description: "7 modulból álló ERP rendszer tervezés és specifikáció kivitelező cégnek. Projekt-, HR-, raktár-, pénzügyi és dokumentumkezelő modul.",
      tech: ["Next.js", "PostgreSQL", "Node.js"],
    },
    {
      name: "Cabinova – Prémium ingatlan bemutató oldal",
      industry: "Ingatlan / Moduláris otthonok",
      description: "Prémium moduláris ház projekt weboldala, lead generálásra optimalizálva.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
  ],
};

export const WHY: { eyebrow: string; headline: string; items: WhyItem[] } = {
  eyebrow: "MIÉRT SIROSOFT",
  headline: "Amit máshol nem kapsz meg",
  items: [
    { icon: "code-2", title: "Nincs sablon, nincs kompromisszum", body: "Minden projektet nulláról, az ügyfél folyamataira szabunk." },
    { icon: "layers", title: "Moduláris, bővíthető rendszerek", body: "Amit ma fejlesztünk, holnap is bővíthető — nem kell újraírni egy év múlva." },
    { icon: "shield-check", title: "Biztonságos és dokumentált", body: "Kóddokumentáció, tesztek, és átadási dokumentáció minden projektnél." },
    { icon: "phone", title: "Egy pont, teljes felelősség", body: "Nem outsourcingolunk — a fejlesztés teljes egészében nálunk történik." },
    { icon: "refresh-cw", title: "SIRONIC integráció", body: "Ha kell, az üzemeltetést is átveszi a SIRONIC csapat. Egy kézből minden." },
    { icon: "clock", title: "Átlátható határidők", body: "Sprint alapú fejlesztés, rendszeres demók. Mindig tudod, hol tartunk." },
  ],
};

export const CONTACT_CTA = {
  headline: "Van egy ötleted vagy egy problémád?",
  subheadline: "Nem kell kész specifikáció. Elég egy félórás egyeztetés — mi megmondjuk, hogy megvalósítható-e, és ha igen, mennyiből.",
  cta: "Ingyenes konzultációt kérek →",
  note: "Az igényfelmérő konzultáció ingyenes és kötelezettségmentes.",
};

export const CONTACT: {
  eyebrow: string;
  headline: string;
  details: ContactDetail[];
  serviceOptions: string[];
  budgetOptions: string[];
  submit: string;
} = {
  eyebrow: "KAPCSOLAT",
  headline: "Kezdjük el a projektet.",
  details: [
    { icon: "mail", value: "info@sirosoft.hu" },
    { icon: "phone", value: "+36 ..." },
    { icon: "map-pin", value: "Székesfehérvár / Remote" },
  ],
  serviceOptions: [
    "Weboldal fejlesztés",
    "Belső ügyviteli rendszer",
    "CRM fejlesztés",
    "ERP fejlesztés",
    "Mobilalkalmazás",
    "Egyedi szoftver / integráció",
    "Még nem tudom pontosan",
  ],
  budgetOptions: [
    "< 500.000 Ft",
    "500.000 – 1.500.000 Ft",
    "1.500.000 – 5.000.000 Ft",
    "5.000.000 Ft felett",
    "Inkább személyesen egyeztetünk",
  ],
  submit: "Projekt elindítása →",
};

export const FOOTER = {
  navLinks: [
    "Webfejlesztés", "Belső rendszerek", "CRM fejlesztés", "ERP fejlesztés",
    "Mobilalkalmazás", "Referenciák", "Kapcsolat", "Adatvédelem",
  ],
  legal: "© 2026 SIROSOFT – SIROTECH Informatikai és Biztonságtechnikai Kft.",
  note: "A SIROSOFT a SIROTECH Kft. szoftverfejlesztési divíziója.",
  tagline: "Szoftver, ami dolgozik. Nem csak fut.",
};
