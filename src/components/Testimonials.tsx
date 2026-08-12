"use client";

import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { TESTIMONIALS, type TestimonialCard } from "@/data/content";

interface Props {
  testimonials?: TestimonialCard[];
}

export const Testimonials = ({ testimonials = TESTIMONIALS }: Props) => {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section data-testid="testimonials-section" className="border-t border-line/50 bg-surface/40 py-28 lg:py-32">
      <div className="mx-auto max-w-site px-6">
        <SectionHeading eyebrow="VÉLEMÉNYEK" headline="Mit mondanak az ügyfeleink" accent="green" />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex h-full flex-col justify-between rounded-lg border border-line bg-surface p-7 transition-all duration-150 hover:border-[#1AE87B]/40">
                <div>
                  <div className="mb-4 font-mono text-2xl font-bold text-[#1AE87B]/40">“</div>
                  <p className="text-sm leading-relaxed text-muted italic">{item.quote}</p>
                </div>

                <div className="mt-6 border-t border-line/60 pt-4">
                  <div className="font-display text-base font-semibold text-ink">{item.name}</div>
                  <div className="font-mono text-xs text-muted">
                    {item.role ? `${item.role}, ` : ""}{item.company}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
