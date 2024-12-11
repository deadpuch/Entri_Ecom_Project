import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '7':'repeat(7, minmax(0, 150px))',
        '8':'repeat(8, minmax(0, 150px))',
      }
    },
  },
  plugins: [daisyui],
}