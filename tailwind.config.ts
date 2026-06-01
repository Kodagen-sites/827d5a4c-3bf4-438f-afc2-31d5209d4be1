import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ocean & Mint (locked palette) — bg / surface / accent / contrast
        bg: "#EAF7F5",
        surface: "#A8D9D0",
        accent: "#2E7F8C",
        primary: "#2E7F8C",
        ink: "#0E3A47",
        contrast: "#0E3A47",
        cream: "#EAF7F5",
        mint: "#A8D9D0",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Playfair Display", "serif"],
        body: ["var(--font-lato)", "Lato", "sans-serif"],
        sans: ["var(--font-lato)", "Lato", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
