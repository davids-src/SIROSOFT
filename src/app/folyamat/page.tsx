import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Folyamatunk | SIROSOFT",
  description: "Megismerjük az igényét, specifikáljuk, fejlesztjük, átadjuk és üzemeltetjük — teljes körű szoftverfejlesztési folyamat.",
  alternates: {
    canonical: "/folyamat",
  },
};

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Igényfelmérés",
    subtitle: "Ingyenes, kötelezettségmentes konzultáció",
    body: "Megismerjük a cége folyamatait, a jelenlegi fájdalompontokat, a célokat és a korlátokat. Nem sablonjainkat próbáljuk Önre erőltetni — az igényeire szabjuk a megoldást.",
    duration: "1–2 alkalom",
    output: "Projekt scope összefoglaló",
    icon: "01",
    details: [
      "Videóhíváson vagy személyesen — ahogy Önnek kényelmes",
      "Feltérképezzük a meglévő rendszereket és integrációs pontokat",
      "Prioritizáljuk a funkciókat: Mi a legfontosabb most?",
      "Reális időkeret és büdzsé becslés",
    ],
  },
  {
    number: "02",
    title: "Specifikáció & Tervezés",
    subtitle: "Kézzel fogható terv a fejlesztés megkezdése előtt",
    body: "Részletes funkcionális leírást, képernyőterveket és technikai architektúrát készítünk. Ez a fázis biztosítja, hogy fejlesztés közben ne legyenek meglepetések.",
    duration: "1–3 hét",
    output: "Specifikációs dokumentum + képernyőtervek",
    icon: "02",
    details: [
      "Funkcionális és nem-funkcionális követelmények dokumentálása",
      "Képernyőtervek (wireframe / mockup)",
      "Technikai architektúra és adatmodell",
      "API és integráció tervezés",
    ],
  },
  {
    number: "03",
    title: "Sprint alapú fejlesztés",
    subtitle: "Átlátható, iteratív fejlesztési folyamat",
    body: "1–2 hetes sprintekben dolgozunk. Minden sprint végén demo — mindig látja, hol tartunk. Nem tűnünk el hónapokra, és nem hozunk át meglévőket kész tényként.",
    duration: "4–20+ hét (projekttől függően)",
    output: "Tesztelhető szoftver sprintenként",
    icon: "03",
    details: [
      "Heti státusz update minden esetben",
      "Sprint demo minden iteráció végén",
      "Visszajelzés alapján finomítunk — nem visszük át a tervet vakon",
      "Verziókövetés és kódminőség-ellenőrzés",
    ],
  },
  {
    number: "04",
    title: "Tesztelés & Átadás",
    subtitle: "Alapos QA, éles indítás, teljes dokumentáció",
    body: "Manuális és automatizált tesztelés, éles szerverre telepítés, felhasználói oktatás és átadási dokumentáció. Az átadás után sem tűnünk el.",
    duration: "1–2 hét",
    output: "Éles szoftver + teljes dokumentáció",
    icon: "04",
    details: [
      "Funkcionális és regressziós tesztelés",
      "Teljesítmény és biztonsági audit",
      "Éles szerverre telepítés és konfiguráció",
      "Felhasználói kézikönyv és oktatás",
    ],
  },
  {
    number: "05",
    title: "Üzemeltetés & Fejlesztés",
    subtitle: "Opcionális hosszú távú együttműködés",
    body: "Ha kell, a SIRONIC csapat átveszi az üzemeltetést. Karbantartás, hibajavítás és folyamatos fejlesztés — egy kézből, teljes felelősséggel.",
    duration: "Havi retainer alapon",
    output: "SLA szerinti üzemeltetés",
    icon: "05",
    details: [
      "Monitorozás és riasztás 24/7",
      "Hibajavítás garantált válaszidővel",
      "Rendszeres biztonsági frissítések",
      "Új funkciók priorizált fejlesztése",
    ],
  },
];

const PRINCIPLES = [
  {
    title: "Nincs fekete doboz",
    body: "Minden döntésünkről tájékoztatunk. A kód az Önöké, a dokumentáció az Önöké — nem vagyunk fogva tartó.",
  },
  {
    title: "Embereknek szól",
    body: "Nem technológiai fitogtatás, hanem megoldás az Ön üzleti problémájára. Ha valami simábbá tehető, megmondjuk.",
  },
  {
    title: "Fix határidők, reális becslések",
    body: "Nem ígérünk olyat, amit nem tudunk tartani. Ha csúszik valami, azonnal jelzünk.",
  },
  {
    title: "Egy csapat, teljes felelősség",
    body: "Nem outsourcingolunk, nem bújunk alvállalkozók mögé. A fejlesztés nálunk történik, a felelősség is nálunk van.",
  },
];

export default function Folyamat() {
  return (
    <div className="bg-[#0A0A0C] font-body text-ink">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
          <div className="pointer-events-none absolute inset-0 hero-grid opacity-40" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,232,123,0.10),transparent_65%)]" />
          <div className="relative mx-auto max-w-site px-6">
            <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
              Folyamatunk
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
              Hogyan dolgozunk<br />együtt
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-muted">
              Egy jó szoftver nem csak kódból áll. A siker a jó kommunikáción, átlátható folyamaton és valódi együttműködésen múlik.
            </p>

            {/* Timeline preview */}
            <div className="mt-10 flex flex-wrap gap-3">
              {PROCESS_STEPS.map((s) => (
                <div key={s.number} className="flex items-center gap-2 rounded-sm border border-line bg-surface px-3 py-1.5">
                  <span className="font-mono text-xs font-bold text-[#1AE87B]">{s.number}</span>
                  <span className="text-xs text-muted">{s.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-site px-6">
            <div className="space-y-6">
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={step.number}
                  className="overflow-hidden rounded-lg border border-line bg-surface transition-colors duration-150 hover:border-[#1AE87B]/30"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Step number */}
                    <div className="flex items-center gap-4 border-b border-line/50 bg-panel p-6 lg:col-span-3 lg:flex-col lg:items-start lg:gap-0 lg:border-b-0 lg:border-r lg:p-8">
                      <div className="font-display text-6xl font-bold text-[#1AE87B]/20">{step.number}</div>
                      <div className="lg:mt-auto">
                        <div className="mt-0 lg:mt-4 font-mono text-[11px] uppercase tracking-wider text-muted/60">Időkeret</div>
                        <div className="mt-1 font-mono text-xs text-ink">{step.duration}</div>
                        <div className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted/60">Kimenet</div>
                        <div className="mt-1 font-mono text-xs text-[#1AE87B]">{step.output}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:col-span-9 lg:p-8">
                      <div className="mb-1 font-mono text-xs text-muted/60">{step.subtitle}</div>
                      <h2 className="font-display text-2xl font-semibold text-ink">{step.title}</h2>
                      <p className="mt-3 text-[15px] leading-[1.7] text-muted">{step.body}</p>

                      <div className="mt-6">
                        <div className="mb-3 font-mono text-xs text-muted">{"// mit tartalmaz"}</div>
                        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {step.details.map((d) => (
                            <li key={d} className="flex items-start gap-2.5 text-sm text-ink">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1AE87B]" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Connector arrow (not on last) */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="flex justify-center border-t border-line/30 py-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#1AE87B]/30 bg-[#1AE87B]/10">
                        <span className="text-[10px] text-[#1AE87B]">↓</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="border-t border-line/50 bg-surface/40 py-20 lg:py-28">
          <div className="mx-auto max-w-site px-6">
            <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
              Elveink
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
              Ahogyan hozzáállunk a munkához
            </h2>
            <div className="mt-12 overflow-hidden rounded-lg border border-line bg-line">
              <div className="grid grid-cols-1 gap-px sm:grid-cols-2">
                {PRINCIPLES.map((p) => (
                  <div key={p.title} className="bg-surface p-7 transition-colors duration-150 hover:bg-panel">
                    <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
