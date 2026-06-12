import { motion } from "framer-motion";
import { Terminal } from "./Terminal";
import { HERO, SECTION_IDS } from "@/data/content";
import { scrollToId } from "@/lib/scroll";

export const Hero = () => {
  return (
    <section
      id={SECTION_IDS.hero}
      data-testid="hero-section"
      className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(232,39,26,0.15),transparent_70%)]" />
      <div className="pointer-events-none absolute top-40 -left-40 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(26,232,123,0.10),transparent_70%)]" />

      <div className="relative mx-auto grid max-w-site grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-siro-border bg-siro-bg2/60 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-siro-green animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-siro-muted">{HERO.eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-siro-text sm:text-5xl lg:text-6xl"
          >
            {HERO.headline.map((line, i) => (
              <span key={i} className="block">
                {i === HERO.headline.length - 1 ? (
                  <>
                    létezik. <span className="text-siro-red">Mi megírjuk.</span>
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
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-[1.7] text-siro-muted sm:text-lg"
          >
            {HERO.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <button
              data-testid="hero-primary-cta"
              onClick={() => scrollToId(SECTION_IDS.contact)}
              className="rounded-[4px] bg-siro-red px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#ff352a] hover:shadow-glow-red"
            >
              {HERO.primaryCta}
            </button>
            <button
              data-testid="hero-secondary-cta"
              onClick={() => scrollToId(SECTION_IDS.references)}
              className="rounded-[4px] border border-siro-border px-6 py-3.5 text-sm font-semibold text-siro-text transition-all duration-200 hover:border-siro-green hover:text-siro-green"
            >
              {HERO.secondaryCta}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-siro-muted"
          >
            {HERO.trustStrip.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="text-siro-green">/</span>
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
