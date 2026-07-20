"use client";

import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { PROCESS, SECTION_IDS } from "@/data/content";

export const Process = () => {
  return (
    <section id={SECTION_IDS.process} data-testid="process-section" className="border-t border-line/50 bg-surface/40 py-28 lg:py-32">
      <div className="mx-auto max-w-site px-6">
        <SectionHeading eyebrow={PROCESS.eyebrow} headline={PROCESS.headline} accent="green" />

        <div className="relative mt-14">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-line lg:block" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {PROCESS.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div data-testid={`process-step-${step.number}`} className="relative">
                  <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-line bg-bg font-mono text-sm font-semibold text-[#1AE87B]">
                    {step.number}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
