/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx,vue,svelte}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00c6ff',
        accent: '#22c55e'
      }
    },
  },
  plugins: [],
}