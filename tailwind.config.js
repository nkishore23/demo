// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",       // For HTML files in the root
    "./*.{html,js,jsx,ts,tsx,vue}", // Adjust based on your source file locations and types
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}