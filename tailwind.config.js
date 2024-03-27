/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: false,
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
    require("tailwind-fluid-typography"),
    function ({addComponents}){
      addComponents({
        '.container': {
          width: 'min(95%, 1024px)',
          margin: '0 auto',
        }
      })
    }
  ],
};
