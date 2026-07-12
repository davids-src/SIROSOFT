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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-siro-border bg-siro-bg/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-site items-center justify-between px-5 lg:px-8">
        <Logo onClick={() => go(SECTION_IDS.hero)} />

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              data-testid="nav-services-trigger"
              onClick={() => go(SECTION_IDS.services)}
              className="flex items-center gap-1 rounded px-3 py-2 text-sm text-siro-muted transition-colors hover:text-siro-text"
            >
              {NAV.servicesLabel}
              <ChevronDown size={15} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div
                data-testid="nav-services-dropdown"
                className="absolute left-0 top-full w-60 overflow-hidden rounded-lg border border-siro-border bg-siro-bg2 p-1.5 shadow-2xl"
              >
                {NAV.servicesDropdown.map((item) => (
                  <Link
                    key={item.id}
                    href={`/szolgaltatasok/${SERVICE_SLUGS[item.id] ?? item.id}`}
                    data-testid={`nav-dropdown-${item.id}`}
                    onClick={() => { setMobileOpen(false); setServicesOpen(false); }}
                    className="block w-full rounded px-3 py-2 text-left text-sm text-siro-muted transition-colors hover:bg-siro-bg3 hover:text-siro-text"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV.links.map((link) => (
            <button
              key={link.target}
              data-testid={`nav-link-${link.target}`}
              onClick={() => go(link.target)}
              className="rounded px-3 py-2 text-sm text-siro-muted transition-colors hover:text-siro-text"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 rounded border border-siro-border px-1 py-0.5 font-mono text-xs sm:flex">
            <span className="rounded bg-siro-red/15 px-2 py-1 font-semibold text-siro-red" data-testid="lang-hu">HU</span>
            <button
              data-testid="lang-en"
              title="English – hamarosan"
              className="cursor-not-allowed px-2 py-1 text-siro-muted/60"
            >
              EN
            </button>
          </div>

          <button
            data-testid="navbar-cta"
            onClick={() => go(SECTION_IDS.contact)}
            className="hidden rounded-[4px] bg-siro-red px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#ff352a] hover:shadow-glow-red sm:inline-flex"
          >
            {NAV.cta}
          </button>

          <button
            data-testid="mobile-menu-toggle"
            className="text-siro-text lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menü"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div data-testid="mobile-menu" className="border-t border-siro-border bg-siro-bg2 px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            <div className="px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-siro-muted">Szolgáltatások</div>
            {NAV.servicesDropdown.map((item) => (
              <Link
                key={item.id}
                href={`/szolgaltatasok/${SERVICE_SLUGS[item.id] ?? item.id}`}
                onClick={() => setMobileOpen(false)}
                className="rounded px-3 py-2 text-left text-sm text-siro-muted hover:text-siro-text"
              >
                {item.label}
              </Link>
            ))}
            <div className="my-1 border-t border-siro-border" />
            {NAV.links.map((link) => (
              <button
                key={link.target}
                onClick={() => go(link.target)}
                className="rounded px-3 py-2.5 text-left text-sm text-siro-muted hover:text-siro-text"
              >
                {link.label}
              </button>
            ))}
            <button
              data-testid="mobile-cta"
              onClick={() => go(SECTION_IDS.contact)}
              className="mt-2 rounded-[4px] bg-siro-red px-4 py-3 text-center text-sm font-semibold text-white"
            >
              {NAV.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
