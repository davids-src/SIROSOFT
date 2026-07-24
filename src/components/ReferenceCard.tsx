"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, ImageOff } from "lucide-react";
import { useState } from "react";

interface PortfolioRef {
  id: string;
  company: string;
  url: string;
  image: string;
  description: string;
  alt: string;
}

export function ReferenceCard({ project: r }: { project: PortfolioRef }) {
  const [imgError, setImgError] = useState(false);
  const imagePath = `/references/${r.image}.png`;

  return (
    <Link
      href={r.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all duration-200 hover:border-[#1AE87B]/50 hover:shadow-[0_0_40px_-16px_#1AE87B]"
      aria-label={`${r.company} projekt megtekintése`}
    >
      {/* Kép terület */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-panel">
        {!imgError ? (
          <Image
            src={imagePath}
            alt={r.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Placeholder – amíg nincs feltöltve a kép */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-panel">
            <ImageOff size={28} className="text-muted/30" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted/40">
              Kép hamarosan
            </span>
            <span className="font-mono text-[10px] text-muted/25">
              {r.image}.png
            </span>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#0A0A0C]/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full border border-[#1AE87B]/60 bg-[#1AE87B]/10 px-4 py-2 text-sm font-semibold text-[#1AE87B]">
            Megtekintés
            <ExternalLink size={14} />
          </span>
        </div>
      </div>

      {/* Tartalom */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="font-display text-base font-semibold leading-snug text-ink transition-colors duration-150 group-hover:text-[#1AE87B]">
            {r.company}
          </h3>
          <ArrowUpRight
            size={16}
            className="mt-0.5 shrink-0 text-muted transition-colors duration-150 group-hover:text-[#1AE87B]"
          />
        </div>

        <p className="text-[13px] leading-relaxed text-muted">{r.description}</p>

        <div className="mt-auto pt-4">
          <span className="font-mono text-[11px] text-muted/50 transition-colors duration-150 group-hover:text-[#1AE87B]/60">
            {r.url.replace(/^https?:\/\//, "")}
          </span>
        </div>
      </div>
    </Link>
  );
}
