"use client";

import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ICONS } from "./icons";
import type { ServiceDetailPage } from "@/data/services-detail";
import { Reveal } from "./Reveal";

// ─── What Is ─────────────────────────────────────────────────────────────────
export const ServiceWhatIs = ({ page }: { page: ServiceDetailPage }) => {
  const isRed = page.accent === "red";
  const accentText = isRed ? "text-siro-red" : "text-siro-green";
  const accentBorder = isRed ? "border-siro-red/30" : "border-siro-green/30";

  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <Reveal>
          <div className={`rounded-2xl border ${accentBorder} bg-siro-bg2 p-8 lg:p-12`}>
            <span className={`font-mono text-xs font-semibold uppercase tracking-[0.12em] ${accentText}`}>
              {"// Miről van szó"}
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold text-siro-text sm:text-3xl">
              {page.whatIs.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-[1.8] text-siro-muted">{page.whatIs.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// ─── Use Cases ───────────────────────────────────────────────────────────────
export const ServiceUseCases = ({ page }: { page: ServiceDetailPage }) => {
  const isRed = page.accent === "red";
  const accentText = isRed ? "text-siro-red" : "text-siro-green";

  return (
    <section className="py-20 lg:py-24 bg-siro-bg2">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <Reveal>
          <span className={`font-mono text-xs font-semibold uppercase tracking-[0.12em] ${accentText}`}>
            {"// Kinek és mire"}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-siro-text sm:text-4xl">
            Tipikus felhasználási esetek
          </h2>
          <p className="mt-3 max-w-2xl text-base text-siro-muted">
            B2B vállalatok, akiknek megoldottunk hasonló problémát.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {page.useCases.map((uc, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-xl border border-siro-border bg-siro-bg p-6">
                <div className={`mb-4 font-mono text-xs font-semibold uppercase tracking-wider ${accentText}`}>
                  {uc.industry}
                </div>
                <div className="mb-3">
                  <div className="mb-1 font-mono text-[11px] text-siro-muted">{"// kihívás"}</div>
                  <p className="text-sm text-siro-muted leading-[1.7]">{uc.challenge}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-siro-border">
                  <div className="mb-1 font-mono text-[11px] text-siro-muted">{"// megoldás"}</div>
                  <p className="text-sm text-siro-text leading-[1.7]">{uc.solution}</p>
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
  const isRed = page.accent === "red";
  const accentText = isRed ? "text-siro-red" : "text-siro-green";
  const accentBg = isRed ? "bg-siro-red/10" : "bg-siro-green/10";
  const accentBorder = isRed ? "border-siro-red/20" : "border-siro-green/20";

  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <Reveal>
          <span className={`font-mono text-xs font-semibold uppercase tracking-[0.12em] ${accentText}`}>
            {"// Funkciók"}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-siro-text sm:text-4xl">
            {page.features.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {page.features.items.map((feat, i) => {
            const FeatIcon = ICONS[feat.icon] ?? ICONS["code-2"];
            return (
              <Reveal key={i} delay={i * 0.07}>
                <div className={`group rounded-xl border border-siro-border bg-siro-bg2 p-6 transition-all duration-200 hover:border-siro-border/80 hover:bg-siro-bg3`}>
                  <span className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border ${accentBorder} ${accentBg} ${accentText}`}>
                    <FeatIcon size={18} />
                  </span>
                  <h3 className="mb-2 font-display text-base font-semibold text-siro-text">{feat.title}</h3>
                  <p className="text-sm leading-[1.7] text-siro-muted">{feat.body}</p>
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
  const isRed = page.accent === "red";
  const accentText = isRed ? "text-siro-red" : "text-siro-green";

  return (
    <section className="py-20 lg:py-24 bg-siro-bg2">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <Reveal>
          <span className={`font-mono text-xs font-semibold uppercase tracking-[0.12em] ${accentText}`}>
            {"// Folyamat"}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-siro-text sm:text-4xl">
            Hogyan dolgozunk együtt
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {page.process.map((step, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="rounded-xl border border-siro-border bg-siro-bg p-6">
                <div className={`mb-4 font-mono text-2xl font-bold ${accentText}`}>{step.step}</div>
                <h3 className="mb-2 font-display text-base font-semibold text-siro-text">{step.title}</h3>
                <p className="text-sm leading-[1.7] text-siro-muted">{step.body}</p>
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
  const isRed = page.accent === "red";
  const accentText = isRed ? "text-siro-red" : "text-siro-green";

  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <Reveal>
          <div className="rounded-xl border border-siro-border bg-siro-bg2 p-6 lg:p-8">
            <div className="mb-4 font-mono text-xs text-siro-muted">{"// tech stack"}</div>
            <div className="flex flex-wrap gap-3">
              {page.tech.map((t) => (
                <span
                  key={t}
                  className={`rounded-md border border-siro-border bg-siro-bg px-3 py-1.5 font-mono text-xs ${accentText}`}
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
  const isRed = page.accent === "red";
  const accentText = isRed ? "text-siro-red" : "text-siro-green";
  const accentBg = isRed ? "bg-siro-red" : "bg-siro-green";

  return (
    <section className="py-20 lg:py-24 bg-siro-bg2">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <Reveal>
          <span className={`font-mono text-xs font-semibold uppercase tracking-[0.12em] ${accentText}`}>
            {"// Üzleti hatás"}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-siro-text sm:text-4xl">
            {page.roi.title}
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {page.roi.points.map((point, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex items-start gap-4 rounded-xl border border-siro-border bg-siro-bg p-5">
                <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${accentBg} text-[10px]`}>
                  <Check size={12} className="text-white" />
                </span>
                <p className="text-sm leading-[1.7] text-siro-text">{point}</p>
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
  const isRed = page.accent === "red";
  const accentText = isRed ? "text-siro-red" : "text-siro-green";

  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <Reveal>
          <span className={`font-mono text-xs font-semibold uppercase tracking-[0.12em] ${accentText}`}>
            {"// GYIK"}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-siro-text sm:text-4xl">
            Gyakran ismételt kérdések
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {page.faq.map((item, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="rounded-xl border border-siro-border bg-siro-bg2 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-4 font-display text-base font-semibold text-siro-text">{item.q}</span>
                  {open === i ? (
                    <ChevronUp size={18} className={`shrink-0 ${accentText}`} />
                  ) : (
                    <ChevronDown size={18} className="shrink-0 text-siro-muted" />
                  )}
                </button>
                {open === i && (
                  <div className="border-t border-siro-border px-6 pb-5 pt-4">
                    <p className="text-sm leading-[1.8] text-siro-muted">{item.a}</p>
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
  const isRed = page.accent === "red";
  const accentText = isRed ? "text-siro-red" : "text-siro-green";

  return (
    <section className="py-20 bg-siro-bg2">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-siro-border bg-siro-bg px-6 py-16 text-center lg:px-16">
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
            <div
              className={`pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full ${
                isRed
                  ? "bg-[radial-gradient(circle,rgba(232,39,26,0.18),transparent_70%)]"
                  : "bg-[radial-gradient(circle,rgba(26,232,123,0.14),transparent_70%)]"
              }`}
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-siro-text sm:text-4xl text-balance">
                {page.cta.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-[1.7] text-siro-muted">{page.cta.body}</p>
              <a
                href={`/#kapcsolat`}
                className={`mt-8 inline-block rounded-[4px] px-8 py-4 text-sm font-semibold text-white transition-all duration-200 ${
                  isRed
                    ? "bg-siro-red hover:bg-[#ff352a] hover:shadow-glow-red"
                    : "bg-siro-green text-siro-bg hover:bg-[#22ff8a] hover:shadow-glow-green"
                }`}
              >
                {page.cta.button}
              </a>
              <p className="mt-4 font-mono text-xs text-siro-muted">
                Az igényfelmérő konzultáció ingyenes és kötelezettségmentes.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
