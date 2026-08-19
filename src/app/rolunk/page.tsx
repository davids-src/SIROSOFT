import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import {
  Code2,
  Shield,
  Smartphone,
  Globe,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Rólunk | SIROSOFT – Egyedi szoftverfejlesztő csapat",
  description:
    "Ismerje meg a SIROSOFT mögött álló csapatot: Skoda Dávid és Tóth Tamás történetét, küldetésünket és értékeinket. Szoftverfejlesztés, CRM, ERP és weboldalak kkv-knak.",
  alternates: {
    canonical: "/rolunk",
  },
};

// ── Founder adatok ─────────────────────────────────────────────────────────────
const FOUNDERS = [
  {
    name: "Skoda Dávid",
    role: "Biztonságtechnikai és rendszergazdai divízió vezető",
    image: "/team/david.png",
    bio: "A szakmai pályámat programozás oktatásával kezdtem. Még iskolás éveim alatt gyakornokként dolgoztam egy gyártó cégnél, majd vagyonvédelmi és biztonságtechnikai területen szereztem tapasztalatot. Ezt követően egy gyárban informatikai supportosként folytattam, majd egy multinacionális vállalatnál rendszerüzemeltető szakemberként dolgoztam, ahol a szakmai munkámat magas szinten elismerték. Ez az út vezetett el végül a vállalkozásig.",
    bio2: "Elektrotechnikusi és ipari informatikai technikusi végzettségem mellett tűzvédelmi ismereteket is szereztem, amelyeket a mai napig aktívan alkalmazok a munkám során. Ma a cégben a biztonságtechnikai és a rendszergazdai divíziót vezetem, tervezem és valósítom meg, emellett a pénzügyi és gazdasági folyamatokért is én felelek.",
  },
  {
    name: "Tóth Tamás",
    role: "Szoftverfejlesztési divízió vezető",
    image: "/team/tomi.png",
    bio: "Nem sokkal a cég indulása után csatlakoztam Dávidhoz, és azóta a szoftverfejlesztési divíziónkat viszem. Full stack webes és rendszerfejlesztőként dolgozom, szoftverfejlesztő és tesztelő technikusi végzettséggel a hátam mögött. Több éves önálló programozási és tervezési tapasztalatot szereztem, korábbi munkahelyeimen a szakmai teljesítményemet is elismerték.",
    bio2: "Ma én felelek a szoftverfejlesztői divízió teljes körű irányításáért és megvalósításáért, emellett aktívan részt veszek a belső üzletviteli folyamataink kialakításában és digitalizálásában is. A tudásátadás régóta közel áll hozzám — korábban programozást is oktattam.",
  },
];

// ── Értékeink ────────────────────────────────────────────────────────────────
const VALUES = [
  {
    icon: Code2,
    title: "Minőség minden sorban",
    desc: "Nem szállítunk félkész megoldást. Minden projekt átmegy kód-review-n és manuális tesztelésen, mielőtt az ügyfélhez kerül.",
  },
  {
    icon: Shield,
    title: "Átláthatóság",
    desc: "Heti státuszfrissítés, nyílt kommunikáció, nincs rejtett díj. Az ügyfél minden pillanatban pontosan tudja, hol tart a projekt.",
  },
  {
    icon: Globe,
    title: "Valódi üzleti fókusz",
    desc: "Nem a technológia, hanem az eredmény érdekel minket. A döntéseinket mindig az ügyfél valós üzleti igénye vezérli.",
  },
  {
    icon: Smartphone,
    title: "Hosszú távú partnerség",
    desc: "Az átadás nem a projekt vége — garancia, karbantartás, fejlesztés. Akkor is elérhetők vagyunk, amikor valami megváltozik.",
  },
];

// ── Mérföldkövek ──────────────────────────────────────────────────────────────
const MILESTONES = [
  {
    year: "2020",
    title: "Az indulás",
    desc: "Laptopjavítással és hardver-webáruházzal indultunk, 17–18 évesen, egy gazdasági társaság IT-megbízottjaiként.",
  },
  {
    year: "2022",
    title: "Szoftverfejlesztés",
    desc: "Elindítottuk a szoftverfejlesztési divíziót. Első saját fejlesztésünk: a tDarts darts verseny- és klubkezelő platform.",
  },
  {
    year: "2023",
    title: "B2B ügyfelek",
    desc: "Megjelentek az első B2B ügyfelek: egyedi weboldalak, online képzési platformok, liga-menedzsment rendszerek.",
  },
  {
    year: "2024",
    title: "SIROTECH CRM",
    desc: "Átadtuk saját belső CRM rendszerünket, amely ma is a SIROTECH cégcsoport gerince — 9 modullal, Billingo integrációval.",
  },
  {
    year: "2025",
    title: "12+ projekt",
    desc: "Több mint 12 befejezett projekt, 5+ aktív ügyfél, 3 divízió — és folyamatosan növekvő portfólió.",
  },
];

// ── GYIK ──────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Hol található a csapatuk?",
    a: "Székhelyünk Székesfehérváron van (8000 Székesfehérvár, Lövölde utca 24. 4/15.), de munkánk döntő részét távolról végezzük, így az ország bármely pontján lévő ügyféllel tudunk együttdolgozni.",
  },
  {
    q: "Milyen méretű projekteket vállalnak?",
    a: "Kis landing oldaltól komplex, moduláris ERP/CRM rendszerig mindent. Fontos számunkra, hogy ne vállaljunk túl sokat — amit elvállalunk, azt maradéktalanul teljesítjük.",
  },
  {
    q: "Hogyan indul egy projekt?",
    a: "Ingyenes konzultációval kezdünk: megismerjük az igényeket, feltérképezzük a folyamatokat, majd részletes ajánlatot adunk. Nincs kötelezettség az első meetingen.",
  },
  {
    q: "Milyen technológiákkal dolgoznak?",
    a: "Főként Next.js, TypeScript, React, Node.js és MongoDB alapú stack-et használunk. Mobilon React Native-et. Az infrastruktúra Docker-alapú, Cloudflare-rel védett VPS-en fut.",
  },
  {
    q: "Van-e átadás utáni támogatás?",
    a: "Igen. Minden projekthez garanciális időszakot és opcionális karbantartási csomagot biztosítunk. Az ügyfeleink tudják, hogy nem tűnünk el az átadás után.",
  },
  {
    q: "Dolgoznak NDA alatt?",
    a: "Természetesen. Titoktartási megállapodás (NDA) aláírásával kezdünk minden komolyabb tárgyalást — az ügyfelek adatait és üzleti titkait maximálisan védjük.",
  },
  {
    q: "Mikor tudnak elkezdeni egy projektet?",
    a: "Jelenlegi kapacitásainktól függően általában 2–4 hetes szabad időpontunk van. Sürgős esetben vegye fel velünk a kapcsolatot, és megnézzük a lehetőségeket.",
  },
  {
    q: "Lehet-e részletfizetés?",
    a: "Igen. Nagy projekteknél mérföldkő-alapú fizetési ütemezést alkalmazunk: az összeg több részletben, a teljesítéshez kötve folyik ki, nem előre.",
  },
];

// ── FAQ accordion ─────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-150 open:border-[#1AE87B]/30 hover:border-line/80">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-sm font-semibold text-ink">
        {q}
        <ChevronDown
          size={18}
          className="shrink-0 text-muted transition-transform duration-300 group-open:rotate-180"
        />
      </summary>
      <div className="border-t border-line/50 px-6 pb-5 pt-4 text-sm leading-[1.75] text-muted">
        {a}
      </div>
    </details>
  );
}

export default function Rolunk() {
  return (
    <div className="bg-[#0A0A0C] font-body text-ink">
      <Navbar />
      <main>

        {/* ── Hero + Founder kártyák EGYÜTT (above the fold) ───────────── */}
        <section className="relative overflow-hidden pt-32 pb-0 sm:pt-40">
          <div className="pointer-events-none absolute inset-0 hero-grid opacity-40" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,232,123,0.12),transparent_65%)]" />

          <div className="relative mx-auto max-w-site px-6">

            {/* Hero szöveg */}
            <Reveal>
              <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
                Rólunk
              </span>
              <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                Nem egy ügynökség.{" "}
                <span className="text-[#1AE87B]">Egy csapat.</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-[1.7] text-muted sm:text-lg">
                A SIROSOFT mögött két fiatal alapító és egy közös meggyőződés
                áll: az egyedi szoftver nem luxus, hanem versenyelőny. Minden
                egyes projektünket saját nevünk alatt vállaljuk.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/kapcsolat"
                  className="rounded bg-[#1AE87B] px-6 py-3 text-sm font-semibold text-[#0A0A0C] transition-transform duration-150 ease-out hover:scale-[1.02]"
                >
                  Írjon nekünk
                </Link>
                <Link
                  href="/referenciak"
                  className="flex items-center gap-1.5 rounded border border-line px-6 py-3 text-sm font-semibold text-muted transition-colors duration-150 hover:border-[#1AE87B]/50 hover:text-ink"
                >
                  Referenciák <ChevronRight size={15} />
                </Link>
              </div>
            </Reveal>

            {/* ── Founder kártyák – portré, közvetlenül a hero alatt ──── */}
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {FOUNDERS.map((founder, i) => (
                <Reveal key={founder.name} delay={i * 0.12}>
                  <article className="group overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:border-[#1AE87B]/50 hover:shadow-[0_0_60px_-12px_rgba(26,232,123,0.3)] hover:-translate-y-1 sm:flex sm:flex-col">

                    {/* Portré kép – 3:4 arány, arc teljesen látszik */}
                    <div
                      className="relative w-full overflow-hidden"
                      style={{ aspectRatio: "3 / 4" }}
                    >
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        priority={i === 0}
                      />
                      {/* Gradient overlay az alján – neve ráúszik */}
                      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0D0D10] via-[#0D0D10]/60 to-transparent" />
                      {/* Név + szerep a kép alján */}
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
                          {founder.role}
                        </span>
                        <h2 className="mt-1 font-display text-2xl font-bold text-white">
                          {founder.name}
                        </h2>
                      </div>
                    </div>

                    {/* Bio szöveg */}
                    <div className="flex-1 p-6 lg:p-7">
                      <p className="text-sm leading-[1.8] text-muted">
                        {founder.bio}
                      </p>
                      <p className="mt-3 text-sm leading-[1.8] text-muted">
                        {founder.bio2}
                      </p>
                    </div>

                  </article>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ── Cég történet ─────────────────────────────────────────────── */}
        <section className="border-t border-line/50 py-20 lg:py-28 mt-16">
          <div className="mx-auto max-w-site px-6">
            <Reveal>
              <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
                Cég története
              </span>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
                Hogyan jutottunk el ide?
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
              <Reveal delay={0.05}>
                <p className="text-base leading-[1.8] text-muted">
                  Tomival egy munkahelyen dolgoztunk diákként, amikor
                  felismertük, hogy az informatikai tudásunkra saját
                  vállalkozásban is szükség van. Kezdetben egy gazdasági
                  társaság IT-megbízottjaiként dolgoztunk, majd{" "}
                  <span className="font-semibold text-ink">
                    17–18 évesen belevágtunk a saját vállalkozásunkba
                  </span>
                  : laptopjavítással és egy számítógép-alkatrészeket, valamint
                  kész gépeket kínáló webáruház üzemeltetésével indultunk.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-base leading-[1.8] text-muted">
                  Azóta sokat fejlődtünk. Ma már{" "}
                  <span className="font-semibold text-ink">
                    három üzletágban dolgozunk
                  </span>{" "}
                  — szoftverfejlesztés, rendszergazda/IT üzemeltetés és
                  biztonságtechnika —, hogy ügyfeleink informatikai igényeit
                  egyetlen megbízható partnerként tudjuk kiszolgálni. Minden
                  projektünk valódi üzleti problémára ad választ, sablonmegoldás
                  helyett.
                </p>
              </Reveal>
            </div>

            {/* Mérföldkövek */}
            <div className="mt-16 relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[#1AE87B]/60 via-[#1AE87B]/20 to-transparent hidden sm:block" />
              <div className="space-y-8">
                {MILESTONES.map((m, i) => (
                  <Reveal key={m.year} delay={i * 0.08}>
                    <div className="flex gap-6 sm:gap-8">
                      <div className="relative flex flex-col items-center">
                        <div className="mt-1 h-5 w-5 shrink-0 rounded-full border-2 border-[#1AE87B] bg-[#0A0A0C] shadow-[0_0_12px_rgba(26,232,123,0.5)]" />
                      </div>
                      <div className="pb-2">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-bold text-[#1AE87B]">
                            {m.year}
                          </span>
                          <h3 className="font-semibold text-ink">{m.title}</h3>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Értékeink ────────────────────────────────────────────────── */}
        <section className="border-t border-line/50 py-20 lg:py-28">
          <div className="mx-auto max-w-site px-6">
            <Reveal>
              <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
                Értékeink
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
                Ami vezérel minket
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="group h-full rounded-xl border border-line bg-surface p-6 transition-all duration-200 hover:border-[#1AE87B]/40 hover:shadow-[0_0_40px_-8px_rgba(26,232,123,0.15)]">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-panel transition-colors duration-200 group-hover:border-[#1AE87B]/40">
                      <v.icon size={20} className="text-[#1AE87B]" />
                    </div>
                    <h3 className="font-semibold text-ink">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {v.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── GYIK ─────────────────────────────────────────────────────── */}
        <section className="border-t border-line/50 py-20 lg:py-28">
          <div className="mx-auto max-w-site px-6">
            <Reveal>
              <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
                GYIK
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
                Gyakran ismételt kérdések
              </h2>
              <p className="mt-3 max-w-xl text-base leading-[1.7] text-muted">
                Ha nem találja a választ, írjon nekünk — szívesen segítünk.
              </p>
            </Reveal>

            <div className="mt-12 space-y-3">
              {FAQS.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 0.05}>
                  <FAQItem q={faq.q} a={faq.a} />
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-12 text-center">
                <p className="text-sm text-muted">
                  Más kérdése van?{" "}
                  <Link
                    href="/kapcsolat"
                    className="font-semibold text-[#1AE87B] underline-offset-4 hover:underline"
                  >
                    Lépjen kapcsolatba velünk →
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="border-t border-line/50 py-20 lg:py-28">
          <div className="mx-auto max-w-site px-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-line bg-surface px-8 py-16 text-center lg:px-20">
                <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(26,232,123,0.12),transparent_70%)]" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(26,232,123,0.08),transparent_70%)]" />
                <div className="relative mx-auto max-w-2xl">
                  <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
                    Együttműködés
                  </span>
                  <h2 className="mt-6 font-display text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl leading-[1.15]">
                    Legyen a következő projekt az Önöké.
                  </h2>
                  <p className="mt-4 text-base leading-[1.7] text-muted">
                    Ingyenes, kötelezettség nélküli konzultáció — meghallgatjuk
                    az ötletét és reális képet adunk a megvalósíthatóságról.
                  </p>
                  <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                    <Link
                      href="/kapcsolat"
                      className="rounded bg-[#1AE87B] px-8 py-4 text-sm font-semibold text-[#0A0A0C] transition-transform duration-150 ease-out hover:scale-[1.02]"
                    >
                      Ingyenes konzultáció
                    </Link>
                    <Link
                      href="/referenciak"
                      className="flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors duration-150 hover:text-ink"
                    >
                      Munkáink megtekintése <ChevronRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
