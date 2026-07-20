"use client";

import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { TECH, SECTION_IDS } from "@/data/content";

export const TechStack = () => {
  return (
    <section id={SECTION_IDS.tech} data-testid="tech-section" className="py-28 lg:py-32">
      <div className="mx-auto max-w-site px-6">
        <SectionHeading eyebrow={TECH.eyebrow} headline={TECH.headline} accent="green" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TECH.categories.map((cat, i) => (
            <Reveal key={cat.label} delay={i * 0.08}>
              <div
                data-testid={`tech-category-${i}`}
                className="h-full rounded-lg border border-line bg-surface p-6 transition-colors duration-150 hover:border-[#1AE87B]/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-ink">{cat.label}</h3>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1AE87B]" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-line bg-panel px-3 py-1.5 font-mono text-xs text-muted transition-colors duration-150 hover:text-ink"
                    >
                      {tech}
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
