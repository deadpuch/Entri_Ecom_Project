/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Edu: ["Edu AU VIC WA NT Pre", "cursive"],
      outFit: ["Outfit", "sans-serif"],
      sans: ["Poppins", "serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light", "dark"],
  },
};
