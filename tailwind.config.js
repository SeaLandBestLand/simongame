/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#011F3F',
        red: '#ff0000',
        blue: '#0000ff',
        yellow: '#ffff00',
        green: '#008000'
      }
    },
  },
  plugins: [],
}