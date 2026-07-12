"use client";

import { Reveal } from "./Reveal";
import { CONTACT_CTA, SECTION_IDS } from "@/data/content";
import { scrollToId } from "@/lib/scroll";

export const ContactCTA = () => {
  return (
    <section data-testid="contact-cta-section" className="py-20">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-siro-border bg-siro-bg2 px-6 py-16 text-center lg:px-16">
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,39,26,0.18),transparent_70%)]" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-siro-text sm:text-4xl text-balance">
                {CONTACT_CTA.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-[1.7] text-siro-muted">{CONTACT_CTA.subheadline}</p>
              <button
                data-testid="contact-cta-button"
                onClick={() => scrollToId(SECTION_IDS.contact)}
                className="mt-8 rounded-[4px] bg-siro-red px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#ff352a] hover:shadow-glow-red"
              >
                {CONTACT_CTA.cta}
              </button>
              <p className="mt-4 font-mono text-xs text-siro-muted">{CONTACT_CTA.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
