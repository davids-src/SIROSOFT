"use client";

import { Reveal } from "./Reveal";
import { CONTACT_CTA, SECTION_IDS } from "@/data/content";
import { scrollToId } from "@/lib/scroll";

export const ContactCTA = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <div
            data-testid="contact-cta-card"
            className="relative overflow-hidden rounded-lg border border-line bg-surface px-6 py-16 text-center lg:px-16"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(26,232,123,0.15),transparent_70%)]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(26,232,123,0.10),transparent_70%)]" />

            <div className="relative mx-auto max-w-2xl">
              <span className="label block text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
                KAPCSOLAT
              </span>
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl leading-[1.15]">
                {CONTACT_CTA.headline}
              </h2>
              <p className="mt-5 text-base leading-[1.7] text-muted">
                {CONTACT_CTA.subheadline}
              </p>
              <div className="mt-9">
                <button
                  data-testid="contact-cta-button"
                  onClick={() => scrollToId(SECTION_IDS.contact)}
                  className="rounded bg-[#1AE87B] px-8 py-4 text-sm font-semibold text-[#0A0A0C] transition-transform duration-150 ease-out hover:scale-[1.02]"
                >
                  {CONTACT_CTA.cta}
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
