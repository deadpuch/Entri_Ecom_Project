/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Edu: ["Edu AU VIC WA NT Pre", "cursive"],
      outFit: ["Outfit", "sans-serif"],
      sans: ["Poppins", "serif"],
    },
    extend: {
      screens:{
        'xs':'523px',
        'xxs':'375px'
      }
    },
  },
  plugins: [daisyui],

  daisyui: {
    themes: ["light", "dark"],
  },
};
