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
}: SectionHeadingProps) => {
  return (
    <Reveal className="max-w-2xl">
      <span className="label block text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
        {eyebrow}
      </span>
      <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl leading-[1.15]">
        {headline}
      </h2>
      {description && <p className="mt-5 text-base leading-[1.7] text-muted">{description}</p>}
    </Reveal>
  );
};
