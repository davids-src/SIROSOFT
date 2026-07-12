"use client";

import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ICONS } from "./icons";
import { SERVICES, SECTION_IDS, type ServiceRow } from "@/data/content";
import { scrollToId } from "@/lib/scroll";

interface RowProps {
  row: ServiceRow;
  index: number;
}

const Row = ({ row, index }: RowProps) => {
  const Icon = ICONS[row.icon];
  const isRed = row.accent === "red";
  const accentText = isRed ? "text-siro-red" : "text-siro-green";
  const accentBorder = isRed ? "hover:border-siro-red/60" : "hover:border-siro-green/60";
  const accentGlow = isRed ? "group-hover:shadow-glow-red" : "group-hover:shadow-glow-green";
  const reversed = index % 2 === 1;

  return (
    <Reveal>
      <div
        data-testid={`service-row-${row.id}`}
        id={`service-${row.id}`}
        className={`group grid grid-cols-1 items-center gap-8 rounded-lg border border-siro-border bg-siro-bg2 p-7 transition-all duration-200 lg:grid-cols-2 lg:gap-12 lg:p-10 ${accentBorder} ${accentGlow}`}
      >
        {/* Text */}
        <div className={reversed ? "lg:order-2" : ""}>
          <div className="mb-5 flex items-center gap-3">
            <span className={`flex h-11 w-11 items-center justify-center rounded-lg border border-siro-border bg-siro-bg3 ${accentText}`}>
              <Icon size={20} />
            </span>
            <span className={`font-mono text-xs uppercase tracking-wider ${accentText}`}>{row.title}</span>
          </div>
          <h3 className="font-display text-xl font-semibold text-siro-text sm:text-2xl">{row.headline}</h3>
          <p className="mt-3 text-[15px] leading-[1.7] text-siro-muted">{row.body}</p>
          <button
            data-testid={`service-cta-${row.id}`}
            onClick={() => scrollToId(SECTION_IDS.contact)}
            className={`mt-5 text-sm font-semibold ${accentText} transition-opacity hover:opacity-80`}
          >
            {row.cta}
          </button>
        </div>

        {/* Bullets */}
        <div className={reversed ? "lg:order-1" : ""}>
          <div className="rounded-lg border border-siro-border bg-[#08080A] p-5">
            <div className="mb-3 font-mono text-xs text-siro-muted">{"// features"}</div>
            <ul className="space-y-3">
              {row.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-siro-text">
                  <Check size={18} className={`mt-0.5 shrink-0 ${accentText}`} />
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
      <div className="mx-auto max-w-site px-5 lg:px-8">
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
