import { Linkedin, Github } from "lucide-react";
import { Logo } from "./Logo";
import { FOOTER, SECTION_IDS } from "@/data/content";
import { scrollToId } from "@/lib/scroll";

export const Footer = () => {
  return (
    <footer data-testid="footer" className="border-t border-siro-border bg-siro-bg">
      <div className="mx-auto max-w-site px-5 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr_auto]">
          <div>
            <Logo onClick={() => scrollToId(SECTION_IDS.hero)} />
            <p className="mt-4 max-w-xs font-mono text-sm text-siro-green">{FOOTER.tagline}</p>
            <p className="mt-3 max-w-xs text-sm text-siro-muted">{FOOTER.note}</p>
          </div>

          <div>
            <div className="mb-4 font-mono text-xs uppercase tracking-wider text-siro-muted">Oldaltérkép</div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {FOOTER.navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToId(SECTION_IDS.services)}
                  className="text-left text-sm text-siro-muted transition-colors hover:text-siro-text"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 font-mono text-xs uppercase tracking-wider text-siro-muted">Közösség</div>
            <div className="flex gap-3">
              <a
                href="#"
                data-testid="footer-linkedin"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-siro-border text-siro-muted transition-colors hover:border-siro-red hover:text-siro-text"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                data-testid="footer-github"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-siro-border text-siro-muted transition-colors hover:border-siro-green hover:text-siro-text"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-siro-border pt-6">
          <p className="text-xs text-siro-muted">{FOOTER.legal}</p>
        </div>
      </div>
    </footer>
  );
};
