import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      maxWidth: {
        site: "1280px",
      },
      colors: {
        bg: "#0A0A0C",
        surface: "#111116",
        panel: "#18181F",
        line: "#2A2A35",
        ink: "#F0F0F5",
        muted: "#8888A0",
        silver: "#C0C0D0",
        accent: "#1AE87B",
        siro: {
          bg: "#0A0A0C",
          bg2: "#111116",
          bg3: "#18181F",
          border: "#2A2A35",
          text: "#F0F0F5",
          muted: "#8888A0",
          red: "#1AE87B",
          green: "#1AE87B",
        },
      },
      boxShadow: {
        "accent-glow": "0 0 28px -14px #1AE87B",
        "accent-glow-hover": "0 0 56px -10px #1AE87B",
        "glow-red": "0 0 28px -14px #1AE87B",
        "glow-green": "0 0 28px -14px #1AE87B",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
