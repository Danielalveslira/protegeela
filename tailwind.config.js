/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",

    '*.{html,js}'],
  theme: {
    extend: {
      colors: {
        customPurple: '#E0B0FF',
      },
    },
  },
  plugins: [],
}

