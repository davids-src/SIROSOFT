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

  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 lg:pb-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,232,123,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-site px-6">
        {/* Back link */}
        <Link
          href="/#szolgaltatasok"
          className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors duration-150 hover:text-ink"
        >
          <ArrowLeft size={14} />
          Vissza a szolgáltatásokhoz
        </Link>

        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-panel text-[#1AE87B]">
            <Icon size={20} strokeWidth={1.5} />
          </span>
          <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
            {page.eyebrow}
          </span>
        </div>

        <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
          {page.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-muted">{page.subheadline}</p>

        {/* Badges */}
        <div className="mt-8 flex flex-wrap gap-2">
          {page.heroBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-sm border border-line bg-surface px-3 py-1 font-mono text-xs text-muted"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`/#${SECTION_IDS.contact}`}
            className="rounded bg-[#1AE87B] px-6 py-3 text-sm font-semibold text-[#0A0A0C] transition-transform duration-150 ease-out hover:scale-[1.02]"
          >
            {page.cta.button}
          </a>
          <Link
            href="/#referenciak"
            className="text-sm font-medium text-muted transition-colors duration-150 hover:text-ink"
          >
            Referenciáink →
          </Link>
        </div>
      </div>
    </section>
  );
};
