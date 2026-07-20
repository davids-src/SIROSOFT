"use client";

import Link from "next/link";
import { Linkedin, Github } from "lucide-react";
import { Logo } from "./Logo";
import { FOOTER, SECTION_IDS } from "@/data/content";
import { scrollToId } from "@/lib/scroll";

export const Footer = () => {
  return (
    <footer data-testid="footer" className="border-t border-line/50 bg-surface/40 py-16">
      <div className="mx-auto max-w-site px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Col 1 */}
          <div className="lg:col-span-5">
            <Logo onClick={() => scrollToId(SECTION_IDS.hero)} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{FOOTER.tagline}</p>
            <div className="mt-4 font-mono text-xs text-[#1AE87B]">{FOOTER.note}</div>
          </div>

          {/* Col 2 */}
          <div className="lg:col-span-4">
            <div className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted">Oldaltérkép</div>
            <ul className="mt-4 space-y-2 text-sm">
              {FOOTER.navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToId(SECTION_IDS.services)}
                    className="text-left text-muted transition-colors duration-150 hover:text-ink"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div className="lg:col-span-3">
            <div className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted">Cégadatok</div>
            <div className="mt-4 space-y-2 font-mono text-xs text-muted">
              <div>SIROTECH Kft.</div>
              <div>8000 Székesfehérvár, Lövölde utca 24 4/15</div>
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
