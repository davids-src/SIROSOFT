import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { REFERENCES, SECTION_IDS } from "@/data/content";

export const References = () => {
  return (
    <section id={SECTION_IDS.references} data-testid="references-section" className="border-y border-siro-border bg-siro-bg2/40 py-28 lg:py-32">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <SectionHeading eyebrow={REFERENCES.eyebrow} headline={REFERENCES.headline} accent="red" />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REFERENCES.cards.map((card, i) => (
            <Reveal key={card.name} delay={i * 0.08}>
              <div
                data-testid={`reference-card-${i}`}
                className="group flex h-full flex-col rounded-lg border border-siro-border bg-siro-bg p-6 transition-all duration-200 hover:border-siro-red/60 hover:shadow-glow-red"
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="rounded-[4px] border border-siro-border bg-siro-bg3 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-siro-muted">
                    {card.industry}
                  </span>
                  <ArrowUpRight size={18} className="text-siro-muted transition-colors group-hover:text-siro-red" />
                </div>
                <h3 className="font-display text-lg font-semibold leading-snug text-siro-text">{card.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-siro-muted">{card.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {card.tech.map((t) => (
                    <span key={t} className="rounded-[4px] bg-siro-bg3 px-2 py-1 font-mono text-[11px] text-siro-green">
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
