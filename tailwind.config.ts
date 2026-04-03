import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "var(--color-cream)",
          purple: "var(--color-purple)",
          "purple-dark": "var(--color-purple-dark)",
          red: "var(--color-red)",
          yellow: "var(--color-yellow)",
          green: "var(--color-green)",
          pink: "var(--color-pink)",
          magenta: "var(--color-magenta)",
          "blue-grey": "var(--color-blue-grey)",
          dark: "var(--color-dark)",
          gold: "var(--color-gold)",
          "light-green": "var(--color-light-green)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
