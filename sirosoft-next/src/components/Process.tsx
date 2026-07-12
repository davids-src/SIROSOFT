"use client";

import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { PROCESS, SECTION_IDS } from "@/data/content";

export const Process = () => {
  return (
    <section id={SECTION_IDS.process} data-testid="process-section" className="border-y border-siro-border bg-siro-bg2/40 py-28 lg:py-32">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <SectionHeading eyebrow={PROCESS.eyebrow} headline={PROCESS.headline} accent="red" />

        <div className="relative mt-16">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-siro-red/60 via-siro-red/30 to-transparent lg:block" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {PROCESS.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div data-testid={`process-step-${step.number}`} className="relative">
                  <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-siro-border bg-siro-bg font-mono text-sm font-semibold text-siro-red">
                    {step.number}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-siro-text">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-siro-muted">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
