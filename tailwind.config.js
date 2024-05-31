const plugin = require("tailwindcss/plugin");

/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "rent-black": "#202325",
        "rent-yellow": "#CB9339",
        "rent-grey-light": "#E3E5E5",
        "rent-grey": "#72777A",
        "rent-red": "#F04122",
      },
      boxShadow: {
        rent: "0px 1px 24px 8px rgba(20, 20, 20, 0.08)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-10px)" },
          "50%": { transform: "translateX(10px)" },
          "75%": { transform: "translateX(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
