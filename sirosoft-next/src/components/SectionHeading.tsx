"use client";

import { Reveal } from "./Reveal";
import type { Accent } from "@/data/content";

interface SectionHeadingProps {
  eyebrow: string;
  headline: string;
  description?: string;
  align?: "left" | "center";
  accent?: Accent;
}

export const SectionHeading = ({
  eyebrow,
  headline,
  description,
  align = "left",
  accent = "green",
}: SectionHeadingProps) => {
  const accentColor = accent === "red" ? "text-siro-red" : "text-siro-green";
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className={`font-mono text-xs font-semibold uppercase tracking-[0.12em] ${accentColor}`}>
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-siro-text sm:text-4xl">
        {headline}
      </h2>
      {description && <p className="mt-4 text-base leading-[1.7] text-siro-muted">{description}</p>}
    </Reveal>
  );
};
