import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1E3A8A",
        "navy-dark": "#111827",
        crimson: "#9F1239",
        gold: "#B45309",
      },
    },
  },
  plugins: [],
};
export default config;
