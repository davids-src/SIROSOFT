"use client";

import Link from "next/link";
import { Linkedin, Github } from "lucide-react";
import { Logo } from "./Logo";
import { FOOTER, SECTION_IDS } from "@/data/content";
import { scrollToId } from "@/lib/scroll";

const FOOTER_LINKS = [
  { label: "Webfejlesztés", href: "/szolgaltatasok/webfejlesztes" },
  { label: "Belső rendszerek", href: "/szolgaltatasok/belso-rendszerek" },
  { label: "CRM fejlesztés", href: "/szolgaltatasok/crm-fejlesztes" },
  { label: "ERP fejlesztés", href: "/szolgaltatasok/erp-fejlesztes" },
  { label: "Mobilalkalmazás", href: "/szolgaltatasok/mobilalkalmazas" },
  { label: "Referenciák", href: "/referenciak" },
  { label: "Rólunk", href: "/rolunk" },
  { label: "Folyamat", href: "/folyamat" },
  { label: "Blog", href: "/blog" },
  { label: "Kapcsolat", href: "/kapcsolat" },
];

export const Footer = () => {
  return (
    <footer data-testid="footer" className="border-t border-line/50 bg-surface/40 py-16">
      <div className="mx-auto max-w-site px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Col 1 */}
          <div className="lg:col-span-4">
            <Logo onClick={() => scrollToId(SECTION_IDS.hero)} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{FOOTER.tagline}</p>
            <div className="mt-4 font-mono text-xs text-[#1AE87B]">
              A SIROSOFT a{" "}
              <a
                href="https://sirotech.hu"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[#1AE87B]/80 transition-colors"
              >
                SIROTECH Kft.
              </a>{" "}
              szoftverfejlesztési divíziója.
            </div>
          </div>

          {/* Col 2 */}
          <div className="lg:col-span-2">
            <div className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted">Oldaltérkép</div>
            <ul className="mt-4 space-y-2 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-left text-muted transition-colors duration-150 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div className="lg:col-span-3">
            <div className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted">SIROTECH GROUP</div>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { nev: "SIRONIC", leiras: "Hálózatépítés, IT-üzemeltetés", href: "https://sironic.eu", szin: "#E8271A" },
                { nev: "SIRO-VÉD", leiras: "Kamera, riasztó, tűzjelző", href: "https://siroved.hu", szin: "#1A6BE8" },
                { nev: "SIROVILL", leiras: "Villanyszerelés, kábelezés", href: "https://sirovill.hu", szin: "#F5B81C" },
                { nev: "SIROTECH", leiras: "Központi oldal", href: "https://sirotech.hu", szin: "#C0C0D0" },
              ].map((div) => (
                <li key={div.nev}>
                  <a
                    href={div.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline gap-2 text-muted transition-colors duration-150 hover:text-ink"
                    onClick={() => {
                      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
                        try {
                          const url = new URL(div.href);
                          const targetSite = url.hostname.replace("www.", "");
                          (window as any).gtag("event", "outbound_click", {
                            target_site: targetSite,
                            location: "footer",
                          });
                        } catch (e) {}
                      }
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full shrink-0 relative top-[-1px]" style={{ backgroundColor: div.szin }}></div>
                    <span>
                      <span className="font-semibold">{div.nev}</span>
                      <span className="opacity-80"> &mdash; {div.leiras}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div className="lg:col-span-3">
            <div className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted">Cégadatok</div>
            <div className="mt-4 space-y-1.5 font-mono text-xs text-muted">
              <div className="font-semibold text-ink">SIROTECH Kft.</div>
              <div>8000 Székesfehérvár, Lövölde utca 24. 4/15.</div>
              <div>Cégjegyzékszám: 07-09-037603</div>
              <div>Nyilvántartó: Székesfehérvári Törvényszék Cégbírósága</div>
              <div>Adószám: 33056151-2-07</div>
              <div>hello@sironic.hu</div>
              <div>{process.env.NEXT_PUBLIC_SIRONIC_PHONE || "+36 70 273 5532"}</div>
            </div>
            
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                data-testid="footer-linkedin"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors duration-150 hover:border-[#1AE87B] hover:text-ink"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                data-testid="footer-github"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors duration-150 hover:border-[#1AE87B] hover:text-ink"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line/50 pt-7 font-mono text-xs text-muted sm:flex-row">
          <div>{FOOTER.legal}</div>
          <div className="flex gap-4">
            <Link href="/adatkezelesi" className="hover:text-ink transition-colors duration-150">Adatkezelési tájékoztató</Link>
            <span>•</span>
            <Link href="/aszf" className="hover:text-ink transition-colors duration-150">ÁSZF</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
