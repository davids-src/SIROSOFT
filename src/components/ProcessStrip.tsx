"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { PROCESS } from "@/data/content";

export const ProcessStrip = () => {
  return (
    <section className="border-t border-line/50 bg-surface/40 py-20 lg:py-24">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
                Folyamat
              </span>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                Hogyan dolgozunk együtt
              </h2>
            </div>
            <Link
              href="/folyamat"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-150 hover:text-ink"
            >
              <span>Részletes folyamat</span>
              <ArrowRight size={14} className="transition-transform duration-150 group-hover:translate-x-1 text-[#1AE87B]" />
            </Link>
          </div>
        </Reveal>

        {/* Steps as horizontal timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-[22px] hidden h-px bg-line lg:block" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            {PROCESS.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.07}>
                <div className="relative flex flex-col items-start lg:items-center lg:text-center">
                  {/* Step number bubble */}
                  <div className="relative z-10 mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-[#0A0A0C] font-mono text-sm font-bold text-[#1AE87B]">
                    {step.number}
                  </div>

                  {/* Mobile connector */}
                  {i < PROCESS.steps.length - 1 && (
                    <div className="absolute left-5 top-11 h-6 w-px bg-line sm:hidden" />
                  )}

                  <h3 className="font-display text-sm font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
