import type { Config } from "tailwindcss";

const config: Config = {
  // mui start
  corePlugins: {
    // Remove the Tailwind CSS preflight styles so it can use Material UI's preflight instead (CssBaseline).
    preflight: false,
  },
  // mui end
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: '#root', // mui
  // important: '#__next', // mui
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkcyan: "#90E3F4",
        softcyan: "#B2F7EF",
        softgreen: "#EFF7F6",
        softpink: "#F7D6E0",
        darkpink: "#F2B5D4",
        softyellow: "#fbce77",
        darkyellow: "#f7b970",
        softgray: "#f1f5f9",
      },
    },
  },

  plugins: [],
};
export default config;
