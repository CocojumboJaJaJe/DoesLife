/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        artisan: ['Artisan', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
