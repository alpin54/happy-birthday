import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.tsx", "./components/**/*.tsx", "./sections/**/*.tsx", "./content/**/*.ts"],
  theme: {
    extend: {
      colors: { burgundy: "#4A1728", rose: "#D98C9A", blush: "#F6E7E9", cream: "#FFF8F0", gold: "#D6B477", midnight: "#17131A" },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
