/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'comic': ['"Comic Sans MS"', 'sans-serif'],
      },
      colors: {
        primary: "#150016",
        secondary: "#29104A",
        accent1: "#522C5D",
        accent2: "#845162",
        soft: "#E3B6B1",
        light: "#FFE3D8",
      },
    },
  },
  plugins: [],
};