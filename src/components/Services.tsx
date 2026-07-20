"use client";

import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ICONS } from "./icons";
import { SERVICES, SECTION_IDS, type ServiceRow } from "@/data/content";
import { scrollToId } from "@/lib/scroll";

const SERVICE_SLUGS: Record<string, string> = {
  webdev: "webfejlesztes",
  internal_systems: "belso-rendszerek",
  crm: "crm-fejlesztes",
  erp: "erp-fejlesztes",
  mobile_app: "mobilalkalmazas",
  custom_software: "egyedi-szoftver",
};

interface RowProps {
  row: ServiceRow;
  index: number;
}

const Row = ({ row, index }: RowProps) => {
  const Icon = ICONS[row.icon];
  const reversed = index % 2 === 1;

  return (
    <Reveal>
      <div
        data-testid={`service-row-${row.id}`}
        id={`service-${row.id}`}
        className="group grid grid-cols-1 items-center gap-8 rounded-lg border border-line bg-surface p-7 transition-all duration-150 hover:border-[#1AE87B]/40 hover:shadow-[0_0_28px_-14px_#1AE87B] lg:grid-cols-2 lg:gap-12 lg:p-10"
      >
        {/* Text */}
        <div className={reversed ? "lg:order-2" : ""}>
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-panel text-[#1AE87B]">
              <Icon size={20} strokeWidth={1.5} />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">{row.title}</span>
          </div>
          <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">{row.headline}</h3>
          <p className="mt-3 text-[15px] leading-[1.7] text-muted">{row.body}</p>
          <div className="mt-5">
            <Link
              href={`/szolgaltatasok/${SERVICE_SLUGS[row.id] ?? row.id}`}
              className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-[#1AE87B] transition-opacity duration-150 hover:opacity-80"
            >
              <span>Részletek</span>
              <ArrowRight size={14} className="transition-transform duration-150 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Bullets */}
        <div className={reversed ? "lg:order-1" : ""}>
          <div className="rounded-lg border border-line bg-[#08080A] p-5">
            <div className="mb-3 font-mono text-xs text-muted">{"// features"}</div>
            <ul className="space-y-3">
              {row.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-ink">
                  <Check size={18} className="mt-0.5 shrink-0 text-[#1AE87B]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export const Services = () => {
  return (
    <section id={SECTION_IDS.services} data-testid="services-section" className="py-28 lg:py-32">
      <div className="mx-auto max-w-site px-6">
        <SectionHeading eyebrow={SERVICES.eyebrow} headline={SERVICES.headline} accent="green" />
        <div className="mt-14 space-y-6">
          {SERVICES.rows.map((row, i) => (
            <Row key={row.id} row={row} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
