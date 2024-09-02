import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        monument: ["MonumentExtended", "sans-serif"],
      },
      colors: {
        primary: {
          lime: "#B1F149",
          mint: "#CAF684",
        },
        neutral: {
          carbon: "#161A22",
          slate: "#3A424E",
          cloud: "#9CA3AF",
        },
        secondary: {
          turquoise: "#34D399",
          pastel: "#FDE68A",
          coral: "#F87171",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
