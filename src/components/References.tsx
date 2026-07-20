"use client";

import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { REFERENCES, SECTION_IDS } from "@/data/content";

export const References = () => {
  return (
    <section id={SECTION_IDS.references} data-testid="references-section" className="border-t border-line/50 bg-surface/40 py-28 lg:py-32">
      <div className="mx-auto max-w-site px-6">
        <SectionHeading eyebrow={REFERENCES.eyebrow} headline={REFERENCES.headline} accent="green" />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REFERENCES.cards.map((card, i) => (
            <Reveal key={card.name} delay={i * 0.08}>
              <div
                data-testid={`reference-card-${i}`}
                className="group flex h-full flex-col justify-between rounded-lg border border-line bg-surface p-6 transition-all duration-150 hover:border-[#1AE87B]/40 hover:shadow-[0_0_28px_-14px_#1AE87B]"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-sm border border-line bg-panel px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted">
                      {card.industry}
                    </span>
                    <ArrowUpRight size={18} className="text-muted transition-colors duration-150 group-hover:text-[#1AE87B]" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink transition-colors duration-150 group-hover:text-[#1AE87B]">
                    {card.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-line/60 pt-4">
                  {card.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm bg-panel px-2 py-1 font-mono text-[11px] text-[#1AE87B]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
