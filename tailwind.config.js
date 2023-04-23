/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'salemtak': '#006A6B',
      'salemtak-hover': '#028c8e',
      }
    },
  },
  plugins: [],
}