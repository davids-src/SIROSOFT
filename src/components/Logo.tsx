"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
  onClick?: () => void;
  compact?: boolean;
}

export const Logo = ({ className = "", onClick, compact = false }: LogoProps) => (
  <button
    type="button"
    onClick={onClick}
    data-testid="logo-button"
    className={`group flex items-center gap-2.5 ${className}`}
    aria-label="SIROSOFT főoldal"
  >
    <div className="relative flex items-center transition-colors duration-150">
      <Image 
        src="/logo.png" 
        alt="SIROSOFT Logo" 
        width={300} 
        height={100} 
        className="h-6 w-auto object-contain sm:h-7"
        priority
      />
    </div>
  </button>
);
