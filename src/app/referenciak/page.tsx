import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactCTA } from "@/components/ContactCTA";
import { ReferenceCard } from "@/components/ReferenceCard";

export const metadata: Metadata = {
  title: "Referenciák | SIROSOFT",
  description:
    "Megvalósított weboldalak, platformok és rendszerek: Magyar Darts Szövetség, Boathungary, Erdweg Kft., Event Structure Agency, tDarts és több ügyfél-projektünk.",
  alternates: {
    canonical: "/referenciak",
  },
};

// Az erdweg.hu véglegesítésekor elegendő az env változót átírni.
// Staging / fejlesztési célra: ERDWEG_URL_OVERRIDE=https://erdweg.src.co.hu
const ERDWEG_URL =
  process.env.ERDWEG_URL_OVERRIDE ?? "https://erdweg.hu";

const STATS = [
  { value: "12+", label: "Befejezett projekt" },
  { value: "100%", label: "Elégedett ügyfél" },
  { value: "3+ év", label: "B2B tapasztalat" },
  { value: "5+", label: "Aktív ügyfél" },
];

const PORTFOLIO_REFS = [
  {
    id: "365daysdarts",
    company: "Magyar Darts Akadémia Alapítvány",
    url: "https://365daysdarts.hu",
    image: "365daysdarts_hu",
    alt: "Magyar Darts Akadémia Alapítvány – online képzési platform",
    description:
      "Egyedi fejlesztésű online képzési platform a Magyar Darts Akadémia számára: oktatási tartalmak, edzésprogramok és közösség egy rendszerben — a név a napi fejlődést szimbolizálja.",
  },
  {
    id: "amatordarts",
    company: "Magyar Darts Szövetség",
    url: "https://amatordarts.hu",
    image: "amatordarts_hu",
    alt: "Magyar Darts Szövetség – Országos Amatőr Cashout Liga portál",
    description:
      "Az Országos Amatőr Cashout Liga (OAC) hivatalos portálja: online jelentkezés, pontgyűjtés, automatikus ranglista és teljeskörű digitális liga-menedzsment.",
  },
  {
    id: "boathungary",
    company: "Boathungary.hu Kft.",
    url: "https://boathungary.hu",
    image: "boathungary_hu",
    alt: "Boathungary – prémium elektromos hajó- és Tesla-bérlési weboldal",
    description:
      "Teljesen egyedi fejlesztésű weboldal (React, TypeScript, WordPress nélkül) prémium elektromos hajó- és Tesla-bérlési szolgáltatáshoz, letisztult megjelenéssel és közvetlen ajánlatkérési funkcióval.",
  },
  {
    id: "erdweg",
    company: "Erdweg Kft.",
    url: ERDWEG_URL,
    image: "erdweg_hu",
    alt: "Erdweg Kft. – építőipari vállalkozás bemutatkozó weboldala",
    description:
      "1982 óta működő családi építőipari vállalkozás bemutatkozó weboldala — lakó-, kereskedelmi, felújítási és ipari referenciamunkákkal.",
  },
  {
    id: "eventstructure",
    company: "Event Structure Agency",
    url: "https://eventstructure.hu",
    image: "eventstructure_hu",
    alt: "Event Structure Agency – rendezvény- és márkaélmény-ügynökség weboldala",
    description:
      "Rendezvény- és márkaélmény-ügynökség bemutatkozó weboldala, amely egyedi, emlékezetes márkaélmények és rendezvényterek megalkotására specializálódott.",
  },
  {
    id: "kockakemp",
    company: "Eseményszervezés.hu BTL Ügynökség Kft.",
    url: "https://kockakemp.hu",
    image: "kockakemp_hu",
    alt: "Kocka Kemp – Minecraft-alapú nyári napközis programozótábor gyerekeknek",
    description:
      "Minecraft-alapú nyári napközis programozótábor gyerekeknek (Récsei Center, Budapest), online jelentkezéssel és jegyértékesítéssel.",
  },
  {
    id: "krauszbarkacs",
    company: "Krausz-Barkácsmester Kft.",
    url: "https://krauszbarkacs.hu",
    image: "krauszbarkacs_hu",
    alt: "Krausz-Barkácsmester – barkácsszerszám-webáruház",
    description:
      "Barkácsszerszám-webáruház professzionális és barkácsoló felhasználók számára.",
  },
  {
    id: "regiadental",
    company: "Regia Dental Kft.",
    url: "https://regiadental.hu",
    image: "regiadental_hu",
    alt: "Regia Dental – fogászati rendelő bemutatkozó és időpontfoglalási weboldal",
    description:
      "Fogászati rendelő (Mór) bemutatkozó és időpontfoglalási weboldala, körzeti és magánrendelési információkkal, aktuális páciens-akciókkal.",
  },
  {
    id: "sakkmed",
    company: "SAKKMED 2005 Kft.",
    url: "https://sakkmed.hu",
    image: "sakkmed_hu",
    alt: "SAKKMED – rendezvénytechnikai kivitelező, hang, fény, színpad",
    description:
      "Teljes körű rendezvénytechnikai kivitelező vállalkozás oldala: hang-, fény- és színpadtechnika, installációk, műszaki háttér.",
  },
  {
    id: "tdarts",
    company: "Saját projekt — tDarts",
    url: "https://tdarts.hu",
    image: "tdarts_hu",
    alt: "tDarts – saját fejlesztésű darts verseny- és klubkezelő platform",
    description:
      "Saját fejlesztésű darts verseny- és klubkezelő platform — versenyszervezés, élő tábla-pontozás, automatikus kiesési rendszer és statisztikák egy helyen, több ezer levezetett meccsel.",
  },
  {
    id: "worlddartsfestival",
    company: "Magyar Darts Szövetség",
    url: "https://worlddartsfestival.com",
    image: "worlddartsfestival_com",
    alt: "World Darts Festival – nemzetközi darts versenysorozat hivatalos eseményoldala",
    description:
      "A World Darts Festival (World Masters, World Darts Federation) nemzetközi darts-versenysorozat hivatalos eseményoldala, angol nyelven — jegyértékesítés, program és díjazás bemutatásával.",
  },
  {
    id: "keramiadental",
    company: "Kerámia Plusz Kft.",
    url: "https://keramiadental.hu",
    image: "keramiadental_hu",
    alt: "Kerámia Dental – fogászati klinika bemutatkozó weboldala Székesfehérváron",
    description:
      "Fogászati klinika (Székesfehérvár) bemutatkozó weboldala, időpontkérési lehetőséggel.",
  },
];

const INTERNAL_REFS = [
  {
    num: "01",
    status: "Aktív éles rendszer",
    year: "2024",
    industry: "IT szolgáltatás",
    title: "SIROTECH CRM & Partner Portal",
    description:
      "Teljesen egyedi, moduláris CRM rendszer, amely egységes platformon kezeli a kapcsolatokat, projekteket, ticketeket, munkanaplókat, raktárkészletet, ajánlatokat, számlákat (Billingo integráció) és szerződéseket. Jelenleg a SIROTECH belső működésének gerince.",
    highlights: [
      "9 önálló modul egyetlen platformon",
      "Billingo számlázó integráció",
      "Docker alapú, VPS-en futó architektúra",
      "Valós idejű dashboard és riportok",
    ],
    tech: ["Next.js 14", "MongoDB", "Docker", "TypeScript", "Billingo API", "Resend", "Cloudflare"],
  },
  {
    num: "02",
    status: "Aktív éles platform",
    year: "2022–",
    industry: "Saját fejlesztés / Sport",
    title: "tDarts – Darts verseny- és klubkezelő platform",
    description:
      "Saját fejlesztésű, skálázható darts verseny- és klubkezelő platform — versenyszervezés, élő tábla-pontozás, automatikus kiesési rendszer, statisztikák és ranglisták egy helyen. Több ezer levezetett meccsel és versennyel a háttérben, folyamatosan aktív felhasználói bázissal.",
    highlights: [
      "Élő tábla-pontozás és automatikus kiesési rendszer",
      "Versenyszervezés és liga-menedzsment",
      "Automatikus ranglisták és statisztikák",
      "Több ezer meccs és verseny a háttérben",
    ],
    tech: ["Next.js", "MongoDB", "Node.js", "TypeScript", "Docker", "WebSocket"],
  },
];

export default function Referenciak() {
  return (
    <div className="bg-[#0A0A0C] font-body text-ink">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
          <div className="pointer-events-none absolute inset-0 hero-grid opacity-40" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,232,123,0.12),transparent_65%)]" />
          <div className="relative mx-auto max-w-site px-6">
            <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
              Referenciák
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
              Amit már<br />megcsináltunk
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-muted">
              Nem ígéretek, hanem eredmények. Minden projektünk valós üzleti
              igényre, egyedi megoldással reagál.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-t border-line/50 py-16">
          <div className="mx-auto max-w-site px-6">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-4xl font-bold text-[#1AE87B]">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio grid */}
        <section className="border-t border-line/50 py-20 lg:py-28">
          <div className="mx-auto max-w-site px-6">
            <div className="mb-12">
              <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
                Portfólió
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
                Nyilvánosan is elérhető munkáink
              </h2>
              <p className="mt-3 max-w-xl text-base leading-[1.7] text-muted">
                Kattintson bármelyik kártyára az éles oldal megtekintéséhez.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PORTFOLIO_REFS.map((ref) => (
                <ReferenceCard key={ref.id} project={ref} />
              ))}
            </div>
          </div>
        </section>

        {/* Belső / konfidenciális projektek */}
        <section className="border-t border-line/50 py-20 lg:py-28">
          <div className="mx-auto max-w-site px-6">
            <div className="mb-12">
              <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
                Belső fejlesztések
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
                Saját és bizalmas projektek
              </h2>
              <p className="mt-3 max-w-xl text-base leading-[1.7] text-muted">
                Ezek az ügyfelek belső vagy más okból nem nyilvánosak — de
                szívesen bemutatjuk konzultáció keretein belül.
              </p>
            </div>

            <div className="space-y-6">
              {INTERNAL_REFS.map((ref) => (
                <div
                  key={ref.num}
                  className="overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-150 hover:border-[#1AE87B]/30"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="flex items-center justify-between border-b border-line/50 bg-panel p-6 lg:col-span-3 lg:flex-col lg:items-start lg:justify-start lg:border-b-0 lg:border-r lg:p-8">
                      <div className="font-display text-6xl font-bold text-[#1AE87B]/20">
                        {ref.num}
                      </div>
                      <div className="mt-auto">
                        <div className="mt-4 inline-block rounded-sm border border-[#1AE87B]/40 bg-[#1AE87B]/10 px-2.5 py-1 font-mono text-[11px] text-[#1AE87B]">
                          {ref.status}
                        </div>
                        <div className="mt-2 font-mono text-xs text-muted">{ref.year}</div>
                        <div className="mt-1 font-mono text-xs uppercase tracking-wider text-muted/60">
                          {ref.industry}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 lg:col-span-9 lg:p-8">
                      <h3 className="font-display text-2xl font-semibold text-ink">
                        {ref.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-[1.7] text-muted">
                        {ref.description}
                      </p>
                      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <div className="mb-3 font-mono text-xs text-muted">
                            {"// kiemelések"}
                          </div>
                          <ul className="space-y-2">
                            {ref.highlights.map((h) => (
                              <li key={h} className="flex items-start gap-2.5 text-sm text-ink">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1AE87B]" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="mb-3 font-mono text-xs text-muted">
                            {"// tech stack"}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {ref.tech.map((t) => (
                              <span
                                key={t}
                                className="rounded-sm border border-line bg-panel px-2.5 py-1 font-mono text-xs text-[#1AE87B]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
