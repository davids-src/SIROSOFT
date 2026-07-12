"use client";

interface LogoProps {
  className?: string;
  onClick?: () => void;
  compact?: boolean;
}

// SIROSOFT wordmark + icon. Az ikon helye SVG-vel kitöltve; cserélhető a végleges logóra.
export const Logo = ({ className = "", onClick, compact = false }: LogoProps) => (
  <button
    type="button"
    onClick={onClick}
    data-testid="logo-button"
    className={`group flex items-center gap-2.5 ${className}`}
    aria-label="SIROSOFT főoldal"
  >
    <span className="relative flex h-9 w-9 items-center justify-center rounded-[6px] border border-siro-border bg-siro-bg2 transition-colors duration-200 group-hover:border-siro-red">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 7L4.5 12L9 17" stroke="#E8271A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7L19.5 12L15 17" stroke="#1AE87B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 5L11 19" stroke="#F0F0F5" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </span>
    {!compact && (
      <span className="font-display text-lg font-bold tracking-tight text-siro-text">
        SIRO<span className="text-siro-red">SOFT</span>
      </span>
    )}
  </button>
);
