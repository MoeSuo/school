import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      },
    },
  },
  plugins: [],
};
export default config;
