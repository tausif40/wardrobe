/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dce775",
        primaryDark: "#d6dd52",
        mySky: "#4dd0e1",
        darkSky: "#45c0d0",
        text: "#3f3e3e",
        heading: "#013d8e",
        headingGray: "#333333",

      }
    },
  },
  plugins: [],
}

