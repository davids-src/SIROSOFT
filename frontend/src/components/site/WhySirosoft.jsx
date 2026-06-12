import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ICONS } from "./icons";
import { WHY, SECTION_IDS } from "@/data/content";

export const WhySirosoft = () => {
  return (
    <section id={SECTION_IDS.why} data-testid="why-section" className="py-28 lg:py-32">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <SectionHeading eyebrow={WHY.eyebrow} headline={WHY.headline} accent="green" />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-siro-border bg-siro-border sm:grid-cols-2 lg:grid-cols-3">
          {WHY.items.map((item, i) => {
            const Icon = ICONS[item.icon];
            const isGreen = i % 2 === 0;
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.06}>
                <div data-testid={`why-item-${i}`} className="group h-full bg-siro-bg2 p-7 transition-colors duration-200 hover:bg-siro-bg3">
                  <span className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-siro-border bg-siro-bg ${isGreen ? "text-siro-green" : "text-siro-red"}`}>
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display text-base font-semibold text-siro-text">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-siro-muted">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
