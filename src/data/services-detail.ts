// SIROSOFT – Aloldalak részletes tartalma (B2B fókusz)

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceUseCaseCard {
  industry: string;
  challenge: string;
  solution: string;
}

export interface ServiceProcess {
  step: string;
  title: string;
  body: string;
}

export interface ServiceDetailPage {
  slug: string;
  accent: "red" | "green";
  icon: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  heroBadges: string[];
  // Mi ez section
  whatIs: {
    title: string;
    body: string;
  };
  // Mire jó / use-cases
  useCases: ServiceUseCaseCard[];
  // Funkciók
  features: {
    title: string;
    items: { icon: string; title: string; body: string }[];
  };
  // Folyamat
  process: ServiceProcess[];
  // Tech stack
  tech: string[];
  // ROI / üzleti érv
  roi: {
    title: string;
    points: string[];
  };
  // FAQ
  faq: ServiceFaq[];
  // CTA
  cta: {
    headline: string;
    body: string;
    button: string;
  };
  // SEO
  metaTitle: string;
  metaDescription: string;
}

export const SERVICE_PAGES: ServiceDetailPage[] = [
  // ───────────────────────────── WEBFEJLESZTÉS ─────────────────────────────
  {
    slug: "webfejlesztes",
    accent: "green",
    icon: "globe",
    eyebrow: "WEBFEJLESZTÉS",
    headline: "Nem sablon. Üzleti eszköz.",
    subheadline:
      "Egyedi tervezésű, villámgyors Next.js weboldalak kkv-knak és nagyvállalatoknak — ahol az esztétika és a konverzió egyaránt számít.",
    heroBadges: ["Next.js / React", "TypeScript", "SEO-optimalizált", "Core Web Vitals A+"],
    whatIs: {
      title: "Miért nem elég egy WordPress sablon?",
      body: "A sablon alapú weboldalak kompromisszumokra kényszerítenek: lassú betöltés, felesleges funkciók, biztonság kockázata és nehéz testreszabhatóság. Mi minden projektet az ügyfél márkaidentitására és üzleti céljára szabunk — egyedi tervvel, Next.js alapú, szerver-oldali rendereléssel és modern frontend architektúrával. Az eredmény: versenyelőny, nem átlagos weboldal.",
    },
    useCases: [
      {
        industry: "Gyártó / Ipari vállalat",
        challenge: "Elavult, mobilon nem működő weboldal, nulla organikus forgalom.",
        solution: "Vállalati bemutatkozó oldal strukturált termékoldallal, B2B lead-form integrációval és SEO alapokon.",
      },
      {
        industry: "Szolgáltató cég (B2B SaaS)",
        challenge: "A landing page nem konvertál, magas bounce rate, lassú oldalsebesség.",
        solution: "Conversion-optimized landing page, A/B tesztelésre kész struktúra, HubSpot / CRM integráció.",
      },
      {
        industry: "Kereskedő / Disztribútor",
        challenge: "Nincs online rendelési felület, a cégnek nincs webshopja.",
        solution: "B2B webshop egyedi árlogikával, partnerszintű hozzáféréssel és ERP/számlázó integrációval.",
      },
    ],
    features: {
      title: "Mit kap valójában",
      items: [
        { icon: "zap", title: "Villámgyors betöltés", body: "Server-side rendering és statikus generálás — Core Web Vitals minden metrikán zöld." },
        { icon: "search", title: "Technikai SEO", body: "Strukturált adat, Open Graph, sitemap, robots.txt, i18n-ready architektúra." },
        { icon: "layout-dashboard", title: "CMS integráció", body: "Sanity, Contentful vagy saját admin felület — marketingesek maguk szerkeszthetnek." },
        { icon: "shield-check", title: "Biztonság és GDPR", body: "HTTPS, CSP header, cookie consent, GDPR megfelelő form- és analitika-konfiguráció." },
        { icon: "smartphone", title: "Mobile-first design", body: "Minden breakpointon tökéletes megjelenés — a látogatók 60%+ mobilról érkezik." },
        { icon: "plug", title: "API / rendszer integráció", body: "Billingo, Stripe, SimplePay, SendGrid, Google Analytics, HubSpot — egy felületen." },
      ],
    },
    process: [
      { step: "01", title: "Igényfelmérés & brief", body: "Közösen tisztázzuk a célcsoportot, üzleti célt, versenytársakat és mérési pontokat." },
      { step: "02", title: "Design & UX tervezés", body: "Figma wireframe és high-fidelity design — jóváhagyás után kezdődik a kód." },
      { step: "03", title: "Fejlesztés", body: "Next.js alapú fejlesztés, komponens-alapú rendszer, verziókezelés, CI/CD." },
      { step: "04", title: "Tartalom & SEO", body: "On-page SEO beállítások, tartalom migráció vagy feltöltés, sebességoptimalizálás." },
      { step: "05", title: "Tesztelés & éles indítás", body: "Cross-browser, mobilos tesztelés, domain átállítás, SSL, analitika beállítása." },
      { step: "06", title: "Oktatás & support", body: "CMS kezelési videó, 30 napos garancia, opcionális karbantartási csomag." },
    ],
    tech: ["Next.js 14+", "React", "TypeScript", "Tailwind CSS", "Sanity / Contentful", "Vercel / VPS", "PostgreSQL / MongoDB"],
    roi: {
      title: "Mérhető üzleti hatás",
      points: [
        "Átlagosan 40–60%-kal gyorsabb oldalbetöltés → kevesebb bounce, több konverzió",
        "Technikai SEO alapok → organikus forgalom növekedés 3–6 hónapon belül",
        "B2B lead form integráció → automatikus CRM/email értesítés, gyorsabb értékesítési ciklus",
        "Mobil-optimalizálás → elérjük a forgalom 60%+ -át, aki eddig kiesett",
      ],
    },
    faq: [
      { q: "Mennyi ideig tart egy weboldal elkészítése?", a: "Egy céges bemutatkozó oldal általában 4–6 hétig tart a brief jóváhagyásától az éles indításig. Nagyobb, webshop vagy CMS-integrációt tartalmazó projektek 8–14 hét." },
      { q: "Kell-e már meglévő tartalom, vagy segítenek abban is?", a: "Szöveges tartalom megírásában nem veszünk részt, de strukturálásban, SEO-szempontú átstrukturálásban igen. Copywriter partnerünket szívesen ajánljuk." },
      { q: "Mi történik az oldallal fejlesztés után?", a: "Opcionális karbantartási csomagot kínálunk (SIRONIC keretein belül): hosting felügyelet, biztonsági frissítések, kisebb módosítások havonta." },
      { q: "Meg tudják valósítani a mi design-jainkat (Figma)?", a: "Igen, ha van meglévő brandkönyvük vagy Figma tervük, pontosan azt implementáljuk. Ha nincs, mi tervezzük meg." },
      { q: "Mennyibe kerül egy egyedi weboldal?", a: "Egy alap céges weboldal 350.000–800.000 Ft-tól indul. Webshop vagy komplex portál esetén az ár projekt-specifikus — ingyenes konzultáción pontosítjuk." },
    ],
    cta: {
      headline: "Mutassuk meg, mit tud egy igazán jó weboldal",
      body: "Ingyenes, 30 perces konzultáción átbeszéljük a céljait és egy konkrét árajánlattal zárul a megbeszélés.",
      button: "Ingyenes konzultációt kérek →",
    },
    metaTitle: "Egyedi Webfejlesztés B2B-nek | SIROSOFT",
    metaDescription:
      "Egyedi Next.js weboldalak és B2B portálok fejlesztése kkv-knak és nagyvállalatoknak. Villámgyors, SEO-optimalizált, konverzió-fókuszált megoldások.",
  },

  // ───────────────────────────── BELSŐ RENDSZEREK ─────────────────────────────
  {
    slug: "belso-rendszerek",
    accent: "green",
    icon: "layout-dashboard",
    eyebrow: "BELSŐ RENDSZEREK",
    headline: "Az Excel kora lejárt.",
    subheadline:
      "Egyedi webalapú ügyviteli szoftverek, amelyek pontosan az Ön cégének folyamatait követik — nem fordítva.",
    heroBadges: ["Egyedi ügyvitel", "Szerepkör-kezelés", "Riportok & dashboard", "Integrálható meglévő rendszerekbe"],
    whatIs: {
      title: "Mikor érdemes belső rendszert fejleszteni?",
      body: "Ha Önöknél a napi munka jelentős része Excel-táblákban, e-mailekben vagy több különálló alkalmazásban zajlik — adatvesztés, emberi hiba és átláthatatlanság a következmény. Egy egyedi ügyviteli rendszer centralizálja az adatokat, automatizálja az ismétlődő feladatokat, és valós idejű képet ad az üzlet állapotáról. Nem generikus SaaS — pontosan annyi funkció, amennyire szüksége van.",
    },
    useCases: [
      {
        industry: "Logisztikai / Szállítmányozó cég",
        challenge: "Fuvarokat, sofőröket és raktárkészletet Excel-ben és WhatsApp-on kezelik.",
        solution: "Webalapú fuvarmenedzsment rendszer: megrendelések, sofőr hozzárendelés, valós idejű státuszkövetés, automatikus riportok.",
      },
      {
        industry: "Építőipari kivitelező",
        challenge: "Projektek, munkaórák és anyagfelhasználás szétszórt dokumentumokban.",
        solution: "Projektmenedzsment platform: munkanaplók, feladatkiosztás, anyagigénylés, haladásjelentés és alvállalkozói hozzáférés.",
      },
      {
        industry: "HR / Munkaerő-közvetítő",
        challenge: "Jelöltek, beosztások és szerződések nyilvántartása manuálisan.",
        solution: "HR adminisztrációs platform: jelöltkezelés, beosztástervező, dokumentumkezelés, automatikus értesítések.",
      },
    ],
    features: {
      title: "Amit egy belső rendszer megold",
      items: [
        { icon: "users", title: "Szerepkör alapú hozzáférés", body: "Admin, vezető, munkavállaló — mindenki csak azt látja és módosíthatja, amire jogosult." },
        { icon: "bar-chart-2", title: "Valós idejű dashboard", body: "KPI-ok, státuszok és riportok egy képernyőn — döntési alap nem táblázatokból." },
        { icon: "file-text", title: "Dokumentumkezelés", body: "Szerződések, sablonok, jóváhagyási workflow-k digitálisan, kereshetően." },
        { icon: "bell", title: "Értesítések és automatizmus", body: "E-mail / push értesítések eseményekre — kevesebb kézimunka, kevesebb kiesett feladat." },
        { icon: "download", title: "Export és riportálás", body: "Excel, PDF export és egyedi riportok — menedzsment számára is érthető formátumban." },
        { icon: "plug", title: "Integráció meglévő rendszerekkel", body: "Billingo, NAV, ERP, CRM, email — nem kell mindent felváltani, csak összekapcsoljuk." },
      ],
    },
    process: [
      { step: "01", title: "Folyamatfeltárás", body: "Workshopon feltérképezzük a jelenlegi munkameneteket, fájdalompontokat és a kívánt állapotot." },
      { step: "02", title: "Specifikáció", body: "Funkcionális leírás, képernyőtervek, adatmodell és jogosultsági mátrix elkészítése." },
      { step: "03", title: "MVP fejlesztés", body: "Az alapfunkciók elkészülnek és belső tesztelésre kerülnek a valós adatokon." },
      { step: "04", title: "Iteráció", body: "Felhasználói visszajelzések alapján finomhangolás, új funkciók hozzáadása." },
      { step: "05", title: "Bevezetés & oktatás", body: "Éles környezet beállítása, felhasználók oktatása, adatmigráció." },
      { step: "06", title: "Üzemeltetés", body: "Opcionális karbantartás, fejlesztés és support — SIRONIC keretein belül." },
    ],
    tech: ["Next.js", "Node.js", "MongoDB / PostgreSQL", "Redis", "Docker", "REST API", "Role-based Auth (NextAuth)"],
    roi: {
      title: "Mit nyer egy belső rendszerrel",
      points: [
        "Heti 5–15 óra adminisztrációs idő megtakarítása csapatonként",
        "Emberi hibák és adatvesztés megszüntetése — minden adat egy helyen, verziókövetéssel",
        "Valós idejű üzleti rálátás — nem kell riportokat összegyűjteni",
        "Skálázható alap: új modul bármikor hozzáadható anélkül, hogy mindent újraírnánk",
      ],
    },
    faq: [
      { q: "Mennyi ideig tart egy belső rendszer fejlesztése?", a: "Egy MVP (minimális életképes verzió) általában 6–10 hétig tart. Komplex rendszereknél 3–6 hónap, modulonként bővítve." },
      { q: "Hogyan zajlik a meglévő adataink migrációja?", a: "Az adatmigrációt is kezeljük — Excelből, CSV-ből vagy más rendszerből egyaránt. Ez a projekt részét képezi." },
      { q: "Kell-e IT csapat a rendszer működtetéséhez?", a: "Nem. A rendszert úgy tervezzük, hogy üzemeltetője megfelelő technikai háttér nélkül is tudja kezelni. Karbantartást mi vállalunk." },
      { q: "Mi van, ha a folyamataink változnak?", a: "A rendszert modulárisan és dokumentáltan fejlesztjük — bővítés vagy módosítás bármikor elvégezhető, nem kell elölről kezdeni." },
    ],
    cta: {
      headline: "Mutassuk meg, hogyan nézne ki az Önök rendszere",
      body: "Egy ingyenes folyamatfeltáró egyeztetésen megmutatjuk, mit lehetne automatizálni és hozzávetőleges árat is mondunk.",
      button: "Ingyenes egyeztetést kérek →",
    },
    metaTitle: "Egyedi Belső Rendszerek & Ügyviteli Szoftver | SIROSOFT",
    metaDescription:
      "Webalapú egyedi ügyviteli rendszerek: munkanapló, raktár, dokumentum, workflow — pontosan az Önök folyamataira. Excel helyett valódi rendszer.",
  },

  // ───────────────────────────── CRM ─────────────────────────────
  {
    slug: "crm-fejlesztes",
    accent: "green",
    icon: "users",
    eyebrow: "CRM FEJLESZTÉS",
    headline: "Ügyfélkezelés, ami az Ön logikáját követi.",
    subheadline:
      "Egyedi CRM rendszer, ami pontosan azt tudja, amire szüksége van — felesleges funkciók és drága licenc nélkül.",
    heroBadges: ["Egyedi pipeline", "Ajánlat & szerződéskezelés", "Email & naptár integráció", "Billingo API"],
    whatIs: {
      title: "Mikor nem elég egy dobozos CRM?",
      body: "A Salesforce, HubSpot és hasonló megoldások erős eszközök — de a legtöbb kkv számára túl drágák, túl komplexek és nem illeszkednek a céges értékesítési logikához. Egy egyedi CRM csak azt tartalmazza, amire valóban szükség van: a saját pipeline-ja, a saját státuszai, a saját integrációi. Nincs felesleges funkció, nincs havi licenc-dzsungel.",
    },
    useCases: [
      {
        industry: "B2B értékesítési szervezet",
        challenge: "Az értékesítési csapat Excelben vagy e-mailben követi a pipeline-t, elvesznek az ajánlatok.",
        solution: "Egyedi CRM: leadek, ajánlatok, follow-up emlékeztetők, értékesítési pipeline vizuálisan — egy helyen.",
      },
      {
        industry: "Szolgáltató cég (projektalapú)",
        challenge: "Ügyfelek, projektek, számlák és kommunikáció szétszórtan, nincs átfogó kép.",
        solution: "CRM + projektmenedzsment hibrid: ügyfélkártya, aktív projektek, szerződések, Billingo-számla létrehozás egy gombbal.",
      },
      {
        industry: "Ingatlaniroda / Tanácsadó",
        challenge: "Ügyfelek érdeklődéseit, megtekintéseit, ajánlatait manuálisan kezelik.",
        solution: "Iparágspecifikus CRM: érdeklődők státuszkövetése, ingatlan/termék hozzárendelés, naptár integráció.",
      },
    ],
    features: {
      title: "Amit az egyedi CRM tartalmaz",
      items: [
        { icon: "git-branch", title: "Egyedi pipeline & státuszok", body: "Az értékesítési folyamatot a saját lépések szerint építjük fel — nem egy sablon szerint." },
        { icon: "file-text", title: "Ajánlat- és szerződéskezelés", body: "Ajánlatok generálása, küldése, aláírása és nyilvántartása közvetlenül a CRM-ből." },
        { icon: "calendar", title: "Naptár & emlékeztető", body: "Follow-up határidők, Google Calendar szinkron, automatikus emlékeztetők." },
        { icon: "mail", title: "Email integráció", body: "Ügyfélkommunikáció rögzítése, sablonok küldése, automatikus válaszok a CRM-ből." },
        { icon: "receipt", title: "Billingo integráció", body: "Számlák létrehozása és küldése közvetlenül a CRM-ből — manuális másolás nélkül." },
        { icon: "bar-chart-2", title: "Értékesítési riportok", body: "Pipeline-értéke, konverziós arány, csapatteljesítmény — valós időben." },
      ],
    },
    process: [
      { step: "01", title: "Értékesítési folyamat feltárása", body: "Megismerjük a jelenlegi pipeline-t, státuszokat és az értékesítők napi rutinját." },
      { step: "02", title: "Adatmodell & design", body: "Ügyfélkártya struktúra, pipeline vizualizáció, integrációs pontok megtervezése." },
      { step: "03", title: "Core fejlesztés", body: "Alapfunkciók: ügyfélkezelés, pipeline, feladatok, riportok." },
      { step: "04", title: "Integrációk", body: "Email, naptár, Billingo, vagy bármilyen egyéb API bekötése." },
      { step: "05", title: "Tesztelés & adatmigráció", body: "Meglévő Excel/CSV adatok importálása, értékesítők tesztelési fázisa." },
      { step: "06", title: "Bevezetés & oktatás", body: "Csapatonkénti oktatás, admin felhasználók beállítása, 30 napos support." },
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "NextAuth.js", "Billingo API", "Google Calendar API", "SendGrid / Resend"],
    roi: {
      title: "Amit a saját CRM meghozhat",
      points: [
        "Elveszett ajánlatok és follow-up lehetőségek visszaszerzése — automatikus emlékeztetőkkel",
        "Értékesítési ciklus rövidülése — minden adat egy helyen, kevesebb kérdezgetés",
        "Menedzsment valós rálátása a pipeline-ra — nem kell meetingekre várni",
        "Nincs havi licencdíj — egyszer megveszi, az Önélé marad",
      ],
    },
    faq: [
      { q: "Meddig tart egy CRM fejlesztése?", a: "Egy alap CRM (pipeline, ügyfelek, feladatok, riportok) 6–10 hét. Integrációkkal (Billingo, email, naptár) 10–14 hét." },
      { q: "Át tudjuk hozni az adatainkat a régi rendszerből?", a: "Igen. Excelből, CSV-ből, vagy más CRM-ből (pl. HubSpot export) migráljuk az adatokat — ez a projekt részét képezi." },
      { q: "Mobilon is működik?", a: "Igen, a CRM responsive design-nal készül — tabletről és okostelefonból is teljeskörűen használható." },
      { q: "Lehet majd bővíteni?", a: "Moduláris architektúra — bármikor bővíthető új funkciókkal (pl. ajánlat-aláírás, projekt modul, számlázás)." },
    ],
    cta: {
      headline: "Mutassuk meg, milyen lenne a saját CRM-jük",
      body: "Egy ingyenes egyeztetésen átbeszéljük az értékesítési folyamatukat és bemutatjuk, mit tudna a rendszer.",
      button: "CRM egyeztetést kérek →",
    },
    metaTitle: "Egyedi CRM Fejlesztés B2B Cégeknek | SIROSOFT",
    metaDescription:
      "Egyedi CRM rendszer fejlesztése: pipeline, ajánlatkezelés, Billingo integráció. Licenc nélkül, a saját üzleti logikájukra szabva.",
  },

  // ───────────────────────────── ERP ─────────────────────────────
  {
    slug: "erp-fejlesztes",
    accent: "green",
    icon: "server",
    eyebrow: "ERP FEJLESZTÉS",
    headline: "Vállalati szintű rendszer, kkv áron.",
    subheadline:
      "Moduláris ERP megoldások — csak a releváns modulokkal, fázisos bevezetéssel, az üzleti folyamatokra szabva.",
    heroBadges: ["Moduláris felépítés", "Raktár & készlet", "Pénzügyi modul", "KPI dashboard"],
    whatIs: {
      title: "Miért érdemes egyedi ERP-et fejleszteni?",
      body: "A nagy dobozos ERP megoldások (SAP, Oracle, Microsoft Dynamics) kis- és közepes vállalkozásoknak általában túl drágák, túl merevek és implementálásuk hónapokig tart. A SaaS ERP-ek viszont nem illeszkednek speciális iparági folyamatokhoz. Egy egyedi, moduláris ERP csak azt tartalmazza, amit valóban használnak — a cég saját folyamataira szabva, fokozatosan bővítve.",
    },
    useCases: [
      {
        industry: "Gyártó vállalat",
        challenge: "Termelési rendelések, anyagnormák és raktárkészlet szétszórtan kezelve.",
        solution: "Gyártási ERP: munkarendelések, anyagigénylés, raktárkezelés, átfutási idő nyilvántartás, MES integráció.",
      },
      {
        industry: "Kereskedő / Disztribútor",
        challenge: "Rendelések, szállítók, raktár és számlázás különálló rendszerekben.",
        solution: "Kereskedelmi ERP: vevői rendelések, szállítói rendelések, raktárkezelés, Billingo számlázás, partnerportál.",
      },
      {
        industry: "Építőipari kivitelező",
        challenge: "Projektek, anyagok, alvállalkozók és pénzügyek átláthatatlanok.",
        solution: "Projektmenedzsment ERP: projektköltségvetés, anyagbeszerzés, teljesítményigazolások, pénzügyi modul.",
      },
    ],
    features: {
      title: "ERP modulok",
      items: [
        { icon: "package", title: "Raktár & készletkezelés", body: "Bevételezés, kiadás, leltár, minimális készletszint riasztás, vonalkód olvasó támogatás." },
        { icon: "shopping-cart", title: "Beszerzés & rendelések", body: "Vevői és szállítói rendelések kezelése, átvételi folyamat, számlák párosítása." },
        { icon: "factory", title: "Gyártás / Termelés", body: "Munkarendelések, anyagnorma, gyártási státusz, kapacitástervezés." },
        { icon: "wallet", title: "Pénzügyi modul", body: "Bevételek, kiadások, projekt-költségvetés, Billingo integráció, pénzügyi riportok." },
        { icon: "users", title: "HR & munkaóra", body: "Munkavállalók, munkanaplók, beosztás, szabadságnyilvántartás." },
        { icon: "bar-chart-2", title: "KPI dashboard", body: "Valós idejű üzleti mutatók — forgalom, készletforgás, rendelési státuszok egy helyen." },
      ],
    },
    process: [
      { step: "01", title: "Üzleti folyamat audit", body: "Jelenlegi folyamatok feltérképezése, fájdalompontok azonosítása, modulprioritás meghatározása." },
      { step: "02", title: "Architektúra tervezés", body: "Adatmodell, moduláris struktúra, integrációs pontok, jogosultsági mátrix." },
      { step: "03", title: "1. fázis fejlesztés", body: "A legkritikusabb modulok elkészítése — MVP szinten, valós adatokon tesztelve." },
      { step: "04", title: "Bevezetés & pilot", body: "Korlátozott körű éles használat, visszajelzések gyűjtése, finomhangolás." },
      { step: "05", title: "2–N. fázis", body: "Új modulok hozzáadása az ütemterv szerint — folyamatos bővítés leállás nélkül." },
      { step: "06", title: "Üzemeltetés", body: "SLA alapú support, biztonsági frissítések, kapacitásfelügyelek — SIRONIC-on keresztül." },
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Docker", "REST API", "Billingo API", "NAV API"],
    roi: {
      title: "Az ERP megtérülése",
      points: [
        "Raktárhiányok és felesleges készletek csökkentése — pontosabb rendelési ciklus",
        "Manuális adminisztráció csökkentése 50–70%-kal — kevesebb hiba, kevesebb munkaidő",
        "Valós idejű pénzügyi rálátás — gyorsabb döntések, kevesebb meglepetés",
        "Skálázható alap: a növekedés nem igényel újabb rendszercserét",
      ],
    },
    faq: [
      { q: "Mekkora cégnél érdemes egyedi ERP-et fejleszteni?", a: "Általában 10–200 fős cégek esetén a legjobb az egyedi fejlesztés — ahol a dobozos megoldás már nem elég, a nagyvállalati ERP meg túl drága." },
      { q: "Meddig tart egy ERP bevezetése?", a: "Az első modul 8–14 hét. Teljes ERP rendszer 6–18 hónap, de az első fázis után már produktív a rendszer." },
      { q: "Mi a különbség az egyedi és a dobozos ERP között?", a: "A dobozos ERP általánosra van optimalizálva — az egyedi az Önök specifikus folyamataira. Nincs felesleges funkció, nincs havi licenc, és a jövőbeli módosítások is az Önök igényei szerint alakíthatók." },
      { q: "Integrálható meglévő rendszerekkel?", a: "Igen: NAV API, Billingo, webshop, egyéb ERP modulok vagy partnerrendszerek — API alapon összekötjük." },
    ],
    cta: {
      headline: "Kezdjük egy ingyenes folyamat-audittal",
      body: "Megmutatjuk, hogy egy moduláris ERP hogyan nézne ki az Önök cégénél — és mit spórolna meg.",
      button: "ERP konzultációt kérek →",
    },
    metaTitle: "Egyedi ERP Fejlesztés Kkv-knak | SIROSOFT",
    metaDescription:
      "Moduláris ERP rendszer fejlesztése: raktár, termelés, pénzügy, HR — fázisos bevezetéssel, a saját folyamataikra szabva. SAP nélkül.",
  },

  // ───────────────────────────── MOBILALKALMAZÁS ─────────────────────────────
  {
    slug: "mobilalkalmazas",
    accent: "green",
    icon: "smartphone",
    eyebrow: "MOBILALKALMAZÁS",
    headline: "iOS és Android — egy kódbázisból.",
    subheadline:
      "React Native alapú vállalati és ügyfél-facing mobilalkalmazások, amelyek natív élményt nyújtanak mindkét platformon.",
    heroBadges: ["React Native", "iOS + Android", "Offline működés", "App Store / Play Store"],
    whatIs: {
      title: "Mikor éri meg mobilalkalmazást fejleszteni?",
      body: "Ha a felhasználók rendszeresen mobilról végzik a munkát, ha offline funkcionalitásra van szükség, vagy ha push értesítések, kamera, GPS vagy más natív funkció nélkülözhetetlen — egy mobilalkalmazás egyértelműen jobb felhasználói élményt nyújt, mint egy responsive weboldal. React Native-vel egy kódbázisból iOS-re és Androidra is fejlesztünk.",
    },
    useCases: [
      {
        industry: "Terepen dolgozó csapatok (logisztika, karbantartás)",
        challenge: "A kollégák helyszínen dolgoznak, mobilon kell rögzíteni adatokat, olykor internet nélkül.",
        solution: "Offline-first terepen működő app: feladatok, riportálás, fénykép csatolás — szinkronizálás, ha van net.",
      },
      {
        industry: "B2C / Ügyfél-facing alkalmazás",
        challenge: "Az ügyfelek szeretnének rendelni, foglalni vagy kommunikálni mobilon.",
        solution: "Ügyfél app: regisztráció, foglalás, rendelés, push értesítés, fizetés integráció (Stripe / SimplePay).",
      },
      {
        industry: "Vállalati belső eszköz",
        challenge: "A meglévő ügyviteli rendszer mobilon nehézkesen használható.",
        solution: "Mobilkliens az ügyviteli rendszerhez: dashboard, feladatkezelés, jóváhagyások — bárhonnan elérhető.",
      },
    ],
    features: {
      title: "Amit az alkalmazás tartalmazhat",
      items: [
        { icon: "wifi-off", title: "Offline működés", body: "Az app hálózat nélkül is működik — szinkronizálás automatikus, ha visszaáll a kapcsolat." },
        { icon: "bell", title: "Push értesítések", body: "Valós idejű értesítések eseményekre, határidőkre, státuszváltásokra." },
        { icon: "camera", title: "Kamera & média", body: "Fénykép csatolás, vonalkód olvasás, dokumentum szkennelés." },
        { icon: "map-pin", title: "GPS & geolokáció", body: "Helyszínalapú funkciók: útvonaltervezés, jelenlét rögzítés, terepriport." },
        { icon: "credit-card", title: "Fizetés integráció", body: "Stripe, SimplePay vagy Apple/Google Pay — in-app vásárlás és előfizetés." },
        { icon: "shield-check", title: "Biometrikus belépés", body: "Touch ID, Face ID, PIN — biztonságos és gyors hitelesítés." },
      ],
    },
    process: [
      { step: "01", title: "UX / Felhasználói folyamat tervezés", body: "Userflow, wireframe — hogyan fog kinézni az app mielőtt egy sor kód íródna." },
      { step: "02", title: "Design (Figma)", body: "High-fidelity UI design, komponenskönyvtár, animációk tervezése." },
      { step: "03", title: "React Native fejlesztés", body: "Közös kódbázis iOS-re és Androidra — natív modulok ahol szükséges." },
      { step: "04", title: "Backend & API", body: "REST API fejlesztés, authentikáció, push értesítési rendszer, adatbázis." },
      { step: "05", title: "Tesztelés", body: "Valós eszközökön tesztelés (iOS + Android), beta tesztelők bevonása, performance mérés." },
      { step: "06", title: "Közzététel", body: "App Store és Play Store feltöltés, review folyamat kezelése, éles indítás." },
    ],
    tech: ["React Native", "Expo", "TypeScript", "Node.js / Next.js (backend)", "MongoDB / PostgreSQL", "Firebase (push)", "Stripe / SimplePay"],
    roi: {
      title: "Miért éri meg a mobilapp",
      points: [
        "Terepen dolgozók hatékonysága 30–50%-kal nő offline és GPS funkciókkal",
        "Ügyfélelégedettség növekedése — natív mobilélmény vs. mobilra igazított weboldal",
        "Push értesítésekkel magasabb engagement és visszatérési arány",
        "Egy kódbázis = iOS + Android = alacsonyabb fejlesztési és karbantartási költség",
      ],
    },
    faq: [
      { q: "Mennyi ideig tart egy app fejlesztése?", a: "Egy MVP app (regisztráció, alapfunkciók, backend) 8–14 hét. Komplex alkalmazások 4–9 hónap." },
      { q: "Mi a különbség a natív és a React Native fejlesztés között?", a: "A natív fejlesztés (Swift/Kotlin) kétszer akkora munka, és nem feltétlenül jobb teljesítményt ad. React Native az esetek 95%-ában tökéletes — és kétszer olyan gyors fejlesztés." },
      { q: "Az appot Önök vagy mi töltjük fel az App Store-ba?", a: "Mi kezeljük a teljes közzétételi folyamatot — App Store Connect és Google Play Console konfigurációt is beleértve. Csak egy Apple Developer és Google Play fiókra van szükség (évi ~30.000 Ft)." },
      { q: "Frissítések telepítéséhez a felhasználóknak kell csinálni valamit?", a: "Kisebb frissítéseket OTA (over-the-air) küldhetünk store-frissítés nélkül. Nagy frissítések új App Store / Play Store verziót igényelnek." },
    ],
    cta: {
      headline: "Mutassuk meg, milyen lenne az alkalmazásuk",
      body: "Egy ingyenes konzultáción átbeszéljük a célcsoportot, a funkciókat és reális határidőt és árat mondunk.",
      button: "App konzultációt kérek →",
    },
    metaTitle: "Mobilalkalmazás Fejlesztés iOS & Android | SIROSOFT",
    metaDescription:
      "React Native alapú mobilalkalmazás fejlesztés: iOS + Android, offline működés, push értesítés, GPS, fizetés integráció. App Store közzététellel.",
  },

  // ───────────────────────────── EGYEDI SZOFTVER ─────────────────────────────
  {
    slug: "egyedi-szoftver",
    accent: "green",
    icon: "code-2",
    eyebrow: "EGYEDI SZOFTVER",
    headline: "Ha a kész megoldások egyike sem illik.",
    subheadline:
      "API integrációk, automatizációk, adatfeldolgozó pipeline-ok és speciális iparági szoftverek — ha valami valóban egyedi megoldást igényel.",
    heroBadges: ["REST / GraphQL API", "Automatizációk", "Adatfeldolgozás", "Rendszerintegráció"],
    whatIs: {
      title: "Mikor kell igazán egyedi szoftver?",
      body: "Ha az üzleti folyamat annyira speciális, hogy sem egy weboldal, sem egy CRM, sem egy standard ERP nem adja meg a választ — akkor az egyedi szoftver a megoldás. Automatizálni kell egy komplex folyamatot, össze kell kötni különböző rendszereket, vagy egy teljesen új iparági eszközt kell megépíteni. Pontosan erre specializálódtunk.",
    },
    useCases: [
      {
        industry: "Pénzügyi / Fintech",
        challenge: "Manuális adategyeztetés több rendszer között, napi reportálás hibalehetőséggel.",
        solution: "Automatizált adatfeldolgozó pipeline: adatgyűjtés, transzformálás, egyeztetés, PDF / Excel riport generálás.",
      },
      {
        industry: "Egészségügy / Med-tech",
        challenge: "Speciális adatkezelési és GDPR követelmények, meglévő rendszerek összekapcsolása.",
        solution: "GDPR-megfelelő adatintegráló middleware: HL7 / REST API, titkosítás, audit log, rendszerek szinkronizálása.",
      },
      {
        industry: "Kereskedő / E-commerce",
        challenge: "Több platform (webshop, marketplace, ERP, számlázó) manuális szinkronizálása.",
        solution: "Automatikus integráció: rendelések szinkronizálása, készletkezelés, számlák generálása — emberi beavatkozás nélkül.",
      },
    ],
    features: {
      title: "Mit tudunk megvalósítani",
      items: [
        { icon: "plug", title: "API fejlesztés & integráció", body: "REST, GraphQL, webhook — fejlesztünk vagy bekötünk bármilyen külső rendszert." },
        { icon: "repeat", title: "Automatizációk", body: "Ütemezett folyamatok, esemény-alapú triggerek, workflow automatizálás." },
        { icon: "database", title: "Adatfeldolgozás", body: "ETL pipeline-ok, adategyeztetés, transzformálás, riport generálás." },
        { icon: "code-2", title: "Meglévő rendszer bővítése", body: "Új modul, funkció vagy integráció hozzáadása meglévő alkalmazáshoz." },
        { icon: "shield-check", title: "Biztonság & megfelelőség", body: "GDPR, titkosítás, audit log, szerepkör-alapú hozzáférés — ahol szükséges." },
        { icon: "cpu", title: "Speciális iparági megoldás", body: "Ha valami teljesen egyedi — egyedi terminológiával, logikával, folyamattal." },
      ],
    },
    process: [
      { step: "01", title: "Igény & rendszerfeltárás", body: "Megismerjük a meglévő rendszereket, API-kat, adatformátumokat és az elvárt eredményt." },
      { step: "02", title: "Technikai specifikáció", body: "Architektúra tervezés, integrációs pontok, adatmodell, biztonsági követelmények." },
      { step: "03", title: "Fejlesztés", body: "Iteratív fejlesztés, unit tesztek, integrációs tesztek minden lépésnél." },
      { step: "04", title: "Integrációs tesztelés", body: "Valós adatokon, éles API végpontokkal tesztelve — nem csak sandbox-ban." },
      { step: "05", title: "Éles indítás", body: "Fokozatos élesítés, monitoring beállítása, hibakövetés (Sentry / logging)." },
      { step: "06", title: "Dokumentáció & átadás", body: "Teljes technikai dokumentáció, API leírás, üzemeltetési útmutató." },
    ],
    tech: ["Node.js", "Python", "Next.js", "REST API / GraphQL", "MongoDB / PostgreSQL", "Redis / Bull Queue", "Docker", "Cron / Webhooks"],
    roi: {
      title: "Miért éri meg automatizálni",
      points: [
        "Manuális adategyeztetés megszüntetése — 0 emberi hiba az ismétlődő folyamatokban",
        "Rendszerek összekötése = valós idejű adatok mindenütt, egyetlen igazságforrás",
        "Skálázás ember hozzáadása nélkül — a folyamat automatikusan kezeli a növekvő terhelést",
        "Kiszámítható műkölési költség — egyszeri fejlesztési befektetés, hosszú távú megtakarítás",
      ],
    },
    faq: [
      { q: "Be tudtok kötni bármilyen külső rendszert?", a: "Ha van API-ja (REST, GraphQL, SOAP, webhook), igen. Ha nincs, megvizsgáljuk a lehetséges alternatívákat (scraping, file-alapú integráció stb.)." },
      { q: "Hogyan biztosítjátok, hogy az automatizáció megbízható?", a: "Monitoring, hibaértesítések (email / Slack), automatikus újrapróbálkozás és audit log minden kritikus folyamatnál." },
      { q: "Mi van, ha a külső rendszer API-ja változik?", a: "Karbantartási csomagunkban ezeket a változásokat kezeljük. Changelog-figyelés és proaktív frissítés." },
      { q: "Mennyibe kerül egy egyedi integráció?", a: "Egy egyszerű API integráció 150.000–400.000 Ft. Komplex automatizációk, pipeline-ok projektfüggők — pontos árajánlathoz konzultáció szükséges." },
    ],
    cta: {
      headline: "Van egy egyedi igénye? Beszéljük meg.",
      body: "Nem szükséges kész specifikáció — elég elmondani, mit szeretne elérni. Mi megmondjuk, hogyan valósítható meg.",
      button: "Igényt egyeztetünk →",
    },
    metaTitle: "Egyedi Szoftver & API Integráció Fejlesztés | SIROSOFT",
    metaDescription:
      "REST API fejlesztés, automatizációk, adatfeldolgozás és rendszerintegráció. Ha a kész megoldások egyike sem illik — mi megírjuk.",
  },
];

export function getServicePage(slug: string): ServiceDetailPage | undefined {
  return SERVICE_PAGES.find((p) => p.slug === slug);
}
