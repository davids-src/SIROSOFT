import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adatkezelési Tájékoztató | SIROSOFT",
  description: "A SIROTECH Kft. (SIROSOFT) hivatalos adatkezelési tájékoztatója.",
};

export default function AdatkezelesiPage() {
  return (
    <main className="min-h-screen pt-36 pb-24 sm:pt-44 lg:pb-28">
      <div className="mx-auto max-w-3xl px-6">
        <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
          Jogi dokumentumok
        </span>
        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl">
          Adatkezelési Tájékoztató
        </h1>
        <p className="mt-6 text-lg leading-[1.7] text-muted">
          Utolsó frissítés: {new Date().toLocaleDateString("hu-HU")}
        </p>

        <div className="mt-14 space-y-8 text-base leading-[1.7] text-muted">
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">1. Adatkezelő adatai</h2>
            <ul className="space-y-2 list-inside list-disc">
              <li><strong>Cégnév:</strong> SIROTECH Informatikai és Biztonságtechnikai Kft.</li>
              <li><strong>Székhely:</strong> 8000 Székesfehérvár, Lövölde utca 24 4/15</li>
              <li><strong>Adószám:</strong> 33056151-2-07</li>
              <li><strong>Email:</strong> hello@sironic.hu</li>
              <li><strong>Telefon:</strong> +36 70 273 5532</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">2. Az adatkezelés célja</h2>
            <p>
              Az adatkezelés célja a SIROSOFT weboldalon keresztül történő kapcsolatfelvétel, ajánlatkérés feldolgozása, valamint az ügyfelekkel történő kapcsolattartás.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">3. Kezelt adatok köre</h2>
            <p>
              A kapcsolatfelvételi űrlapon keresztül megadott adatok: név, e-mail cím, telefonszám, cégnév, a projekt leírása és az érdeklődésre számot tartó szolgáltatások.
            </p>
          </section>

          {/* Placeholder for the rest of the text */}
          <div className="rounded-lg border border-line bg-surface p-6 font-mono text-xs text-[#1AE87B]">
            {"// Az Adatkezelési Tájékoztató teljes, részletes GDPR-kompatibilis szövege feltöltés alatt áll."}
          </div>
        </div>
      </div>
    </main>
  );
}
