/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",

    '*.{html,js}'],
  theme: {
    extend: {
      colors: {
        customPurple: '#591a92',
      },
    },
  },
  plugins: [],
}

