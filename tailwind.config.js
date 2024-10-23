import { ssrDynamicImportKey } from 'vite/runtime';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#FFA500",
        secondary: "",
        dark: "#111111"
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem"
        },
      }
    },
  },
  plugins: [],
}

