"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";
import { NAV, SECTION_IDS } from "@/data/content";
import { scrollToId } from "@/lib/scroll";

const SERVICE_SLUGS: Record<string, string> = {
  webdev: "webfejlesztes",
  internal_systems: "belso-rendszerek",
  crm: "crm-fejlesztes",
  erp: "erp-fejlesztes",
  mobile_app: "mobilalkalmazas",
  custom_software: "egyedi-szoftver",
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setMobileOpen(false);
    setServicesOpen(false);
    scrollToId(id);
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-150 ${
        scrolled
          ? "border-b border-line/60 bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-site items-center justify-between px-6">
        <Logo onClick={() => go(SECTION_IDS.hero)} />

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="rounded px-3 py-2 text-sm text-muted transition-colors duration-150 hover:text-ink"
          >
            Kezdőlap
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              data-testid="nav-services-trigger"
              onClick={() => go(SECTION_IDS.services)}
              className="flex items-center gap-1 rounded px-3 py-2 text-sm text-muted transition-colors duration-150 hover:text-ink"
            >
              {NAV.servicesLabel}
              <ChevronDown size={15} className={`transition-transform duration-150 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div
                data-testid="nav-services-dropdown"
                className="absolute left-0 top-full w-60 overflow-hidden rounded-lg border border-line bg-panel p-1.5 shadow-2xl shadow-black/60"
              >
                {NAV.servicesDropdown.map((item) => (
                  <Link
                    key={item.id}
                    href={`/szolgaltatasok/${SERVICE_SLUGS[item.id] ?? item.id}`}
                    data-testid={`nav-dropdown-${item.id}`}
                    onClick={() => { setMobileOpen(false); setServicesOpen(false); }}
                    className="flex w-full items-center gap-2.5 rounded px-3 py-2 text-left text-sm text-muted transition-colors duration-150 hover:bg-surface hover:text-ink"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1AE87B] shadow-[0_0_8px_#1AE87B]" />
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/referenciak" className="rounded px-3 py-2 text-sm text-muted transition-colors duration-150 hover:text-ink">
            Referenciák
          </Link>
          <Link href="/folyamat" className="rounded px-3 py-2 text-sm text-muted transition-colors duration-150 hover:text-ink">
            Folyamat
          </Link>
          <Link href="/kapcsolat" className="rounded px-3 py-2 text-sm text-muted transition-colors duration-150 hover:text-ink">
            Kapcsolat
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 rounded border border-line bg-surface px-1 py-0.5 font-mono text-xs sm:flex">
            <span className="rounded-sm bg-[#1AE87B]/12 border border-[#1AE87B]/40 px-2 py-0.5 font-semibold text-[#1AE87B]" data-testid="lang-hu">HU</span>
            <button
              data-testid="lang-en"
              title="English – hamarosan"
              className="cursor-not-allowed px-2 py-0.5 text-muted/60"
            >
              EN
            </button>
          </div>

          <Link
            href="/kapcsolat"
            data-testid="navbar-cta"
            className="hidden rounded bg-[#1AE87B] px-5 py-2 text-sm font-semibold text-[#0A0A0C] transition-transform duration-150 ease-out hover:scale-[1.02] sm:inline-flex"
          >
            {NAV.cta}
          </Link>

          <button
            data-testid="mobile-menu-toggle"
            className="text-ink lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menü"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div data-testid="mobile-menu" className="border-t border-line bg-surface px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="rounded px-3 py-2.5 text-left text-sm text-muted hover:text-ink"
            >
              Kezdőlap
            </Link>
            <div className="mt-2 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted">Szolgáltatások</div>
            {NAV.servicesDropdown.map((item) => (
              <Link
                key={item.id}
                href={`/szolgaltatasok/${SERVICE_SLUGS[item.id] ?? item.id}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5 rounded px-3 py-2 text-left text-sm text-muted hover:text-ink"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#1AE87B] shadow-[0_0_8px_#1AE87B]" />
                {item.label}
              </Link>
            ))}
            <div className="my-1 border-t border-line" />
            <Link href="/referenciak" onClick={() => setMobileOpen(false)} className="rounded px-3 py-2.5 text-left text-sm text-muted hover:text-ink">
              Referenciák
            </Link>
            <Link href="/folyamat" onClick={() => setMobileOpen(false)} className="rounded px-3 py-2.5 text-left text-sm text-muted hover:text-ink">
              Folyamat
            </Link>
            <Link href="/kapcsolat" onClick={() => setMobileOpen(false)} className="rounded px-3 py-2.5 text-left text-sm text-muted hover:text-ink">
              Kapcsolat
            </Link>
            <Link
              href="/kapcsolat"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block rounded bg-[#1AE87B] px-4 py-3 text-center text-sm font-semibold text-[#0A0A0C] transition-transform duration-150 ease-out hover:scale-[1.02]"
            >
              {NAV.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
