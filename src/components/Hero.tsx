"use client";

import { motion } from "framer-motion";
import { Terminal } from "./Terminal";
import { HERO, SECTION_IDS } from "@/data/content";
import { scrollToId } from "@/lib/scroll";
import Link from "next/link";

export const Hero = () => {
  return (
    <section
      id={SECTION_IDS.hero}
      data-testid="hero-section"
      className="relative overflow-hidden pt-36 pb-28 sm:pt-44"
    >
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-40" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(26,232,123,0.15),transparent_70%)]" />
      <div className="pointer-events-none absolute top-40 -left-40 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(26,232,123,0.10),transparent_70%)]" />

      <div className="relative mx-auto grid max-w-site grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-sm border border-[#1AE87B]/40 bg-[#1AE87B]/12 px-2.5 py-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#1AE87B] animate-pulse" />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">{HERO.eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl"
          >
            {HERO.headline.map((line, i) => (
              <span key={i} className="block">
                {i === HERO.headline.length - 1 ? (
                  <>
                    létezik. <span className="text-[#1AE87B]">Mi megírjuk.</span>
                  </>
                ) : (
                  line
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-[1.7] text-muted sm:text-lg"
          >
            {HERO.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <button
              data-testid="hero-primary-cta"
              onClick={() => scrollToId(SECTION_IDS.contact)}
              className="rounded bg-[#1AE87B] px-6 py-3 text-sm font-semibold text-[#0A0A0C] transition-transform duration-150 ease-out hover:scale-[1.02]"
            >
              {HERO.primaryCta}
            </button>
            <Link
              href="/referenciak"
              data-testid="hero-secondary-cta"
              className="inline-flex justify-center items-center rounded border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors duration-150 hover:border-silver"
            >
              {HERO.secondaryCta}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted"
          >
            {HERO.trustStrip.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="text-[#1AE87B]">/</span>
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Terminal lines={HERO.terminalLines} />
        </motion.div>
      </div>
    </section>
  );
};
