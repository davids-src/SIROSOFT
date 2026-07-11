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
        siro: {
          bg: "#0A0A0C",
          bg2: "#111116",
          bg3: "#18181F",
          border: "#2A2A35",
          text: "#F0F0F5",
          muted: "#8888A0",
          red: "#E8271A",
          green: "#1AE87B",
        },
      },
      boxShadow: {
        "glow-red": "0 0 40px rgba(232,39,26,0.20)",
        "glow-green": "0 0 40px rgba(26,232,123,0.16)",
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
