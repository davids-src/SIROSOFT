import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Navbar as NavbarType } from "@/components/Navbar";
import Link from "next/link";
import { ContactCTA } from "@/components/ContactCTA";
import { References } from "@/components/References";

export const metadata: Metadata = {
  title: "Referenciák | SIROSOFT",
  description: "Tekintsd meg megvalósított projektjeinket: CRM rendszerek, ERP specifikációk, prémium weboldalak.",
};

const STATS = [
  { value: "10+", label: "Befejezett projekt" },
  { value: "100%", label: "Elégedett ügyfél" },
  { value: "3+ év", label: "B2B tapasztalat" },
  { value: "5+", label: "Aktív ügyfél" },
];

const EXTENDED_REFS = [
  {
    name: "SIROTECH CRM & Partner Portal",
    industry: "IT szolgáltatás",
    year: "2024",
    status: "Aktív éles rendszer",
    description: "Teljesen egyedi, moduláris CRM rendszer, amely egységes platformon kezeli a kapcsolatokat, projekteket, ticketeket, munkanaplókat, raktárkészletet, ajánlatokat, számlákat (Billingo integráció) és szerződéseket. Jelenleg a SIROTECH belső működésének gerince.",
    tech: ["Next.js 14", "MongoDB", "Docker", "TypeScript", "Billingo API", "Resend", "Cloudflare"],
    highlights: [
      "9 önálló modul egyetlen platformon",
      "Billingo számlázó integráció",
      "Docker alapú, VPS-en futó architektúra",
      "Valós idejű dashboard és riportok",
    ],
  },
  {
    name: "Mélyépítési ERP rendszer specifikáció",
    industry: "Építőipar",
    year: "2024",
    status: "Specifikáció + prototípus",
    description: "7 modulból álló ERP rendszer teljes tervezése és specifikációja kivitelező cégnek. Projekt-, HR-, raktár-, pénzügyi és dokumentumkezelő modul részletes leírással, képernyőtervekkel és adatmodellel.",
    tech: ["Next.js", "PostgreSQL", "Node.js", "Figma"],
    highlights: [
      "Teljes funkcionális specifikáció",
      "Képernyőtervek minden modulhoz",
      "Technikai architektúra dokumentáció",
      "Adatmodell és API tervezés",
    ],
  },
  {
    name: "Cabinova – Prémium moduláris ingatlan bemutató",
    industry: "Ingatlan / Moduláris otthonok",
    year: "2024",
    status: "Éles weboldal",
    description: "Lead generálásra és prémium brand kommunikációra optimalizált bemutató weboldal moduláris otthon projekthez. Konverzió-fókuszú design, animációk és optimalizált teljesítmény.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    highlights: [
      "Prémium vizuális design",
      "Lead capture optimalizálás",
      "Framer Motion animációk",
      "Lighthouse 95+ teljesítmény",
    ],
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
              Nem ígéretek, hanem eredmények. Minden projektünk valós üzleti igényre, egyedi megoldással reagál.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-t border-line/50 py-16">
          <div className="mx-auto max-w-site px-6">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-4xl font-bold text-[#1AE87B]">{s.value}</div>
                  <div className="mt-2 text-sm text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed References */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-site px-6">
            <div className="space-y-10">
              {EXTENDED_REFS.map((ref, i) => (
                <div
                  key={ref.name}
                  className="overflow-hidden rounded-lg border border-line bg-surface transition-colors duration-150 hover:border-[#1AE87B]/30"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left: accent bar + number */}
                    <div className="flex items-center justify-between border-b border-line/50 bg-panel p-6 lg:col-span-3 lg:flex-col lg:items-start lg:justify-start lg:border-b-0 lg:border-r lg:p-8">
                      <div className="font-display text-6xl font-bold text-[#1AE87B]/20">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-auto">
                        <div className="mt-4 inline-block rounded-sm border border-[#1AE87B]/40 bg-[#1AE87B]/10 px-2.5 py-1 font-mono text-[11px] text-[#1AE87B]">
                          {ref.status}
                        </div>
                        <div className="mt-2 font-mono text-xs text-muted">{ref.year}</div>
                        <div className="mt-1 font-mono text-xs uppercase tracking-wider text-muted/60">{ref.industry}</div>
                      </div>
                    </div>

                    {/* Right: content */}
                    <div className="p-6 lg:col-span-9 lg:p-8">
                      <h2 className="font-display text-2xl font-semibold text-ink">{ref.name}</h2>
                      <p className="mt-3 text-[15px] leading-[1.7] text-muted">{ref.description}</p>

                      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {/* Highlights */}
                        <div>
                          <div className="mb-3 font-mono text-xs text-muted">{"// kiemelések"}</div>
                          <ul className="space-y-2">
                            {ref.highlights.map((h) => (
                              <li key={h} className="flex items-start gap-2.5 text-sm text-ink">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1AE87B]" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech */}
                        <div>
                          <div className="mb-3 font-mono text-xs text-muted">{"// tech stack"}</div>
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

        {/* Partner strip placeholder */}
        <section className="border-t border-line/50 py-20">
          <div className="mx-auto max-w-site px-6 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted/60">
              Partner logók — hamarosan
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="flex h-12 w-36 items-center justify-center rounded-lg border border-line/40 bg-surface/40"
                >
                  <span className="font-mono text-xs text-muted/40">LOGO</span>
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
