"use client";

import { ArrowRight } from "lucide-react";

const DIVISIONS = [
  {
    nev: "SIRONIC",
    szoveg: "Hálózatépítés, IT-üzemeltetés",
    href: "https://sironic.eu",
    szin: "#E8271A",
  },
  {
    nev: "SIRO-VÉD",
    szoveg: "Kamera, riasztó, tűzjelző",
    href: "https://siroved.hu",
    szin: "#1A6BE8",
  },
  {
    nev: "SIROVILL",
    szoveg: "Villanyszerelés, kábelezés",
    href: "https://sirovill.hu",
    szin: "#F5B81C",
    hamarosan: true,
  },
];

export const GroupSection = () => {
  const handleClick = (href: string) => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      try {
        const url = new URL(href);
        const targetSite = url.hostname.replace("www.", "");
        (window as any).gtag("event", "outbound_click", {
          target_site: targetSite,
          location: "cegcsoport_szekcio",
        });
      } catch (e) {
        // Ignore URL parsing errors
      }
    }
  };

  return (
    <section className="py-24 bg-surface relative overflow-hidden" data-testid="group-section">
      <div className="mx-auto max-w-site px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
            SIROTECH GROUP
          </div>
          <h2 className="mb-6 text-3xl font-medium tracking-tight sm:text-4xl">
            Nem csak szoftvert csinálunk
          </h2>
          <p className="mb-6 text-lg text-muted">
            A SIROSOFT a SIROTECH három szakterületének egyike. Ha a rendszer mellé hálózat, kamerarendszer vagy villamos munka is kell, azt is ugyanaz a cég viszi — egy szerződéssel, egy kapcsolattartóval.
          </p>
          <div className="rounded-xl border border-[#1AE87B]/20 bg-[#1AE87B]/5 p-6 text-ink">
            Egy fejlesztésnél gyakran kiderül, hogy nem csak szoftver hiányzik. Ilyenkor nem kell új szolgáltatót keresnie.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DIVISIONS.map((div, i) => (
            <a
              key={i}
              href={div.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClick(div.href)}
              style={{ "--dynamic-color": div.szin } as React.CSSProperties}
              className="group relative flex flex-col justify-between rounded-xl border border-line bg-[#0A0A0C] p-6 transition-all duration-300"
            >
              <div 
                className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" 
                style={{ 
                  boxShadow: `0 0 20px ${div.szin}15`, 
                  border: `1px solid ${div.szin}` 
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: div.szin }}></div>
                  <div className="font-mono text-sm font-semibold uppercase tracking-wider">{div.nev}</div>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-8">{div.szoveg}</p>
              </div>
              <div className="relative z-10 flex items-center justify-between text-sm font-medium transition-colors duration-300">
                <span className="flex items-center gap-2 text-muted transition-colors duration-300 group-hover:[color:var(--dynamic-color)]">
                  Megnyitás {div.hamarosan && <span className="ml-2 text-xs opacity-50 font-normal border border-current rounded px-1.5 py-0.5">Hamarosan</span>}
                </span>
                <ArrowRight size={16} className="text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:[color:var(--dynamic-color)]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
