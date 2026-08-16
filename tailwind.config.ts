import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Geist Mono'", "monospace"],
        sans: ["'Geist'", "sans-serif"],
      },
      colors: {
        bg: "#0a0a0a",
        surface: "#111111",
        border: "#1f1f1f",
        muted: "#666666",
        accent: "#e2e8f0",
        green: "#4ade80",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        blink: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0" } },
        fadeIn: { from: { opacity: "0", transform: "translateY(8px)" }, to: { opacity: "1", transform: "translateY(0)" } },
      },
    },
  },
  plugins: [],
};

export default config;
