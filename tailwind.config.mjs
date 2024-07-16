/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
import animations from "@midudev/tailwind-animations";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Quicksand Variable", ...defaultTheme.fontFamily.sans], // Agrega 'Quicksand' al principio de la lista
      },
      colors: {
        cgreen: "#42A299",
        caqua: "#3FAEBD",
        cgray: "#545454",
        cpurple: "#6A4A90",
        corange: "#D34F4D",
        cbackground: "#7FAEB5",
        fgreen: "#26d6ad",
        fpurple: "#5919cff8",
        "fpurple-box": "#5919cf80",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), animations],
};
