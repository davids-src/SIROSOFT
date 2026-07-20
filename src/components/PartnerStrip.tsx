"use client";

// Partner logók placeholder szekció — logókkal majd feltölthető
export const PartnerStrip = () => {
  const partners = [
    { name: "SIROTECH", abbr: "ST" },
    { name: "Partner", abbr: "P1" },
    { name: "Partner", abbr: "P2" },
    { name: "Partner", abbr: "P3" },
    { name: "Partner", abbr: "P4" },
    { name: "Partner", abbr: "P5" },
  ];

  return (
    <div className="border-y border-line/50 py-10">
      <div className="mx-auto max-w-site px-6">
        <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.18em] text-muted/60">
          Ügyfeleink és partnereink
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {partners.map((p, i) => (
            <div
              key={i}
              className="flex h-10 w-32 items-center justify-center rounded border border-line/60 bg-surface/60 px-4 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              title={p.name}
            >
              <span className="font-mono text-xs font-bold tracking-widest text-muted">
                {p.abbr} LOGO
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
