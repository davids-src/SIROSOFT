"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ICONS } from "./icons";
import type { ServiceDetailPage } from "@/data/services-detail";
import { SECTION_IDS } from "@/data/content";

interface Props {
  page: ServiceDetailPage;
}

export const ServicePageHero = ({ page }: Props) => {
  const Icon = ICONS[page.icon] ?? ICONS["code-2"];
  const isRed = page.accent === "red";
  const accentText = isRed ? "text-siro-red" : "text-siro-green";
  const accentBg = isRed ? "bg-siro-red/10" : "bg-siro-green/10";
  const accentBorder = isRed ? "border-siro-red/30" : "border-siro-green/30";
  const glowClass = isRed
    ? "bg-[radial-gradient(ellipse_at_top,rgba(232,39,26,0.18),transparent_60%)]"
    : "bg-[radial-gradient(ellipse_at_top,rgba(26,232,123,0.14),transparent_60%)]";

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className={`pointer-events-none absolute inset-0 ${glowClass}`} />

      <div className="relative mx-auto max-w-site px-5 lg:px-8">
        {/* Back link */}
        <Link
          href="/#szolgaltatasok"
          className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-siro-muted transition-colors hover:text-siro-text"
        >
          <ArrowLeft size={14} />
          Vissza a szolgáltatásokhoz
        </Link>

        {/* Eyebrow */}
        <div className="mb-5 flex items-center gap-3">
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-lg border ${accentBorder} ${accentBg} ${accentText}`}
          >
            <Icon size={20} />
          </span>
          <span className={`font-mono text-xs font-semibold uppercase tracking-[0.12em] ${accentText}`}>
            {page.eyebrow}
          </span>
        </div>

        <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-siro-text sm:text-5xl lg:text-6xl">
          {page.headline}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-[1.7] text-siro-muted">{page.subheadline}</p>

        {/* Badges */}
        <div className="mt-8 flex flex-wrap gap-2">
          {page.heroBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-siro-border bg-siro-bg2 px-3 py-1 font-mono text-xs text-siro-muted"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`/#${SECTION_IDS.contact}`}
            className={`rounded-[4px] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 ${
              isRed
                ? "bg-siro-red hover:bg-[#ff352a] hover:shadow-glow-red"
                : "bg-siro-green text-siro-bg hover:bg-[#22ff8a] hover:shadow-glow-green"
            }`}
          >
            {page.cta.button}
          </a>
          <Link
            href="/#referenciak"
            className="text-sm font-medium text-siro-muted transition-colors hover:text-siro-text"
          >
            Referenciáink →
          </Link>
        </div>
      </div>
    </section>
  );
};
