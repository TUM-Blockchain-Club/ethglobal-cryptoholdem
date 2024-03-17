/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#1C0002",
      table_black: "#1F2124",
      lightgray: "rgb(217, 217, 217)",
      cgrey: "#333333",
      white: "#FFFFFF",
    },
  },
  plugins: [],
}

