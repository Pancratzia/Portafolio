/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true
    },
    extend: {
      animation: {
        gradient: "gradient 8s linear infinite",
      },
      keyframes: {
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
      fontFamily: {
        display: ["Titillium Web", "sans-serif"],
      }
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
    require("tailwind-fluid-typography")
  ],
};
