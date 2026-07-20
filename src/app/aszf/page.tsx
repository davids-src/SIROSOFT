import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Általános Szerződési Feltételek | SIROSOFT",
  description: "A SIROTECH Kft. szoftverfejlesztési szolgáltatásainak általános szerződési feltételei.",
};

export default function AszfPage() {
  return (
    <main className="min-h-screen pt-36 pb-24 sm:pt-44 lg:pb-28">
      <div className="mx-auto max-w-3xl px-6">
        <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
          Jogi dokumentumok
        </span>
        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl">
          Általános Szerződési Feltételek
        </h1>
        <p className="mt-6 text-lg leading-[1.7] text-muted">
          Utolsó frissítés: {new Date().toLocaleDateString("hu-HU")}
        </p>

        <div className="mt-14 space-y-8 text-base leading-[1.7] text-muted">
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">1. Általános rendelkezések</h2>
            <p>
              Jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) tartalmazzák a SIROTECH Informatikai és Biztonságtechnikai Kft. (székhely: 8000 Székesfehérvár, Lövölde utca 24 4/15, adószám: 33056151-2-07), mint szolgáltató (a továbbiakban: Szolgáltató) által nyújtott szoftverfejlesztési szolgáltatások igénybevételének feltételeit.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">2. Szolgáltatások köre</h2>
            <p>
              A Szolgáltató a SIROSOFT divízió keretein belül egyedi szoftverfejlesztési, webfejlesztési, CRM/ERP implementációs és mobilalkalmazás fejlesztési szolgáltatásokat nyújt B2B ügyfelek részére, egyedi megállapodások alapján.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">3. Szerződéskötés és díjazás</h2>
            <p>
              A felek közötti szerződés minden esetben egyedi árajánlat alapján, írásban (vagy elektronikusan elfogadva) jön létre. A díjazás a projekt komplexitásától és terjedelmétől függően, egyedi megállapodás tárgyát képezi.
            </p>
          </section>

          {/* Placeholder for the rest of the text */}
          <div className="rounded-lg border border-line bg-surface p-6 font-mono text-xs text-[#1AE87B]">
            {"// Az ÁSZF teljes, részletes szövege feltöltés alatt áll. Kérjük, szerződéskötés előtt érdeklődjön elérhetőségeinken."}
          </div>
        </div>
      </div>
    </main>
  );
}
