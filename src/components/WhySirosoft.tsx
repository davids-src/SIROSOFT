"use client";

import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ICONS } from "./icons";
import { WHY, SECTION_IDS } from "@/data/content";

export const WhySirosoft = () => {
  return (
    <section id={SECTION_IDS.why} data-testid="why-section" className="py-28 lg:py-32">
      <div className="mx-auto max-w-site px-6">
        <SectionHeading eyebrow={WHY.eyebrow} headline={WHY.headline} accent="green" />

        <div className="mt-14 overflow-hidden rounded-lg border border-line bg-line">
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
            {WHY.items.map((item, i) => {
              const Icon = ICONS[item.icon];
              return (
                <Reveal key={item.title} delay={i * 0.06}>
                  <div
                    data-testid={`why-item-${i}`}
                    className="h-full bg-surface p-7 transition-colors duration-150 hover:bg-panel"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-bg text-[#1AE87B]">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
