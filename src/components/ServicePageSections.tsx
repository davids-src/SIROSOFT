"use client";

import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ICONS } from "./icons";
import type { ServiceDetailPage } from "@/data/services-detail";
import { Reveal } from "./Reveal";

// ─── What Is ─────────────────────────────────────────────────────────────────
export const ServiceWhatIs = ({ page }: { page: ServiceDetailPage }) => {
  return (
    <section className="py-28 lg:py-32">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <div className="rounded-lg border border-line bg-surface p-8 lg:p-12">
            <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
              {"// Miről van szó"}
            </span>
            <h2 className="mt-6 font-display text-2xl font-semibold text-ink sm:text-3xl">
              {page.whatIs.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-[1.8] text-muted">{page.whatIs.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// ─── Use Cases ───────────────────────────────────────────────────────────────
export const ServiceUseCases = ({ page }: { page: ServiceDetailPage }) => {
  return (
    <section className="border-t border-line/50 bg-surface/40 py-28 lg:py-32">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
            {"// Kinek és mire"}
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Tipikus felhasználási esetek
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted">
            B2B vállalatok, akiknek megoldottunk hasonló problémát.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {page.useCases.map((uc, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-lg border border-line bg-surface p-6">
                <div className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
                  {uc.industry}
                </div>
                <div className="mb-3">
                  <div className="mb-1 font-mono text-[11px] text-muted">{"// kihívás"}</div>
                  <p className="text-sm leading-[1.7] text-muted">{uc.challenge}</p>
                </div>
                <div className="mt-auto border-t border-line pt-4">
                  <div className="mb-1 font-mono text-[11px] text-muted">{"// megoldás"}</div>
                  <p className="text-sm leading-[1.7] text-ink">{uc.solution}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Features ────────────────────────────────────────────────────────────────
export const ServiceFeatures = ({ page }: { page: ServiceDetailPage }) => {
  return (
    <section className="py-28 lg:py-32">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
            {"// Funkciók"}
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {page.features.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {page.features.items.map((feat, i) => {
            const FeatIcon = ICONS[feat.icon] ?? ICONS["code-2"];
            return (
              <Reveal key={i} delay={i * 0.07}>
                <div className="group rounded-lg border border-line bg-surface p-6 transition-colors duration-150 hover:border-[#1AE87B]/40">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-panel text-[#1AE87B]">
                    <FeatIcon size={18} strokeWidth={1.5} />
                  </span>
                  <h3 className="mb-2 font-display text-base font-semibold text-ink">{feat.title}</h3>
                  <p className="text-sm leading-[1.7] text-muted">{feat.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── Process ─────────────────────────────────────────────────────────────────
export const ServiceProcess = ({ page }: { page: ServiceDetailPage }) => {
  return (
    <section className="border-t border-line/50 bg-surface/40 py-28 lg:py-32">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
            {"// Folyamat"}
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Hogyan dolgozunk együtt
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {page.process.map((step, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="rounded-lg border border-line bg-bg p-6">
                <div className="mb-4 font-mono text-2xl font-bold text-[#1AE87B]">{step.step}</div>
                <h3 className="mb-2 font-display text-base font-semibold text-ink">{step.title}</h3>
                <p className="text-sm leading-[1.7] text-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Tech Stack ───────────────────────────────────────────────────────────────
export const ServiceTech = ({ page }: { page: ServiceDetailPage }) => {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <div className="rounded-lg border border-line bg-surface p-6 lg:p-8">
            <div className="mb-4 font-mono text-xs text-muted">{"// tech stack"}</div>
            <div className="flex flex-wrap gap-3">
              {page.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-sm border border-line bg-panel px-3 py-1.5 font-mono text-xs text-[#1AE87B]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// ─── ROI ─────────────────────────────────────────────────────────────────────
export const ServiceROI = ({ page }: { page: ServiceDetailPage }) => {
  return (
    <section className="border-t border-line/50 bg-surface/40 py-28 lg:py-32">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
            {"// Üzleti hatás"}
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {page.roi.title}
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {page.roi.points.map((point, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex items-start gap-4 rounded-lg border border-line bg-surface p-5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1AE87B] text-[10px]">
                  <Check size={12} className="text-[#0A0A0C]" />
                </span>
                <p className="text-sm leading-[1.7] text-ink">{point}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const ServiceFAQ = ({ page }: { page: ServiceDetailPage }) => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 lg:py-32">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
            {"// GYIK"}
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Gyakran ismételt kérdések
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {page.faq.map((item, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="overflow-hidden rounded-lg border border-line bg-surface">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-4 font-display text-base font-semibold text-ink">{item.q}</span>
                  {open === i ? (
                    <ChevronUp size={18} className="shrink-0 text-[#1AE87B]" />
                  ) : (
                    <ChevronDown size={18} className="shrink-0 text-muted" />
                  )}
                </button>
                {open === i && (
                  <div className="border-t border-line px-6 pb-5 pt-4">
                    <p className="text-sm leading-[1.8] text-muted">{item.a}</p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Final CTA ───────────────────────────────────────────────────────────────
export const ServiceCTA = ({ page }: { page: ServiceDetailPage }) => {
  return (
    <section className="py-20 bg-surface/40 border-t border-line/50">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg border border-line bg-surface px-6 py-16 text-center lg:px-16">
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(26,232,123,0.15),transparent_70%)]" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl text-balance">
                {page.cta.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-[1.7] text-muted">{page.cta.body}</p>
              <a
                href="/#kapcsolat"
                className="mt-8 inline-block rounded bg-[#1AE87B] px-8 py-4 text-sm font-semibold text-[#0A0A0C] transition-transform duration-150 ease-out hover:scale-[1.02]"
              >
                {page.cta.button}
              </a>
              <p className="mt-4 font-mono text-xs text-muted">
                Az igényfelmérő konzultáció ingyenes és kötelezettségmentes.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
