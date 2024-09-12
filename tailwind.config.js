/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

    colors: {
      'text': '#0e1017',
      'background': '#f7f8fb',
      'primary': '#5b6aad',
      'secondary': '#96a0cf',
      'accent': '#7e8ccb',
     },

    },
  },
  plugins: [],
}

