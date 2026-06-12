import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { TECH, SECTION_IDS } from "@/data/content";

export const TechStack = () => {
  return (
    <section id={SECTION_IDS.tech} data-testid="tech-section" className="py-28 lg:py-32">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <SectionHeading
          eyebrow={TECH.eyebrow}
          headline={TECH.headline}
          description="Ikonok és nevek rácsban — nem csillog, de megmutatja a szakmai mélységet."
          accent="green"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TECH.categories.map((cat, i) => (
            <Reveal key={cat.label} delay={i * 0.06}>
              <div
                data-testid={`tech-category-${i}`}
                className="h-full rounded-lg border border-siro-border bg-siro-bg2 p-6 transition-colors duration-200 hover:border-siro-green/50"
              >
                <div className="mb-4 font-mono text-xs uppercase tracking-wider text-siro-green">{cat.label}</div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-[4px] border border-siro-border bg-siro-bg3 px-3 py-1.5 font-mono text-xs text-siro-muted transition-colors hover:text-siro-text"
                    >
                      {item}
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
