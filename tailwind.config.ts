import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand:{
          bg:{
            main:"#9A9A9A",
            sub:"#F2F0F1",
            card:"#F0EEED",
            serbg:"#F0F0F0",

          },
          font:{
            black:"#000000",
            white:"#FFFFFF",

          }
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
