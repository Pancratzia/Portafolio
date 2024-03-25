/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 5s linear infinite",
      },
      keyframes: {
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
    require("tailwind-fluid-typography")
  ],
};
