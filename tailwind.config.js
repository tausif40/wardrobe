/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#e1ed72",
        primary: "#dce775",
        primaryDark: "#d6dd52",
        mySky: "#4dd0e1",
        darkSky: "#4dd0e1",
        text: "#535353",
        heading: "#013d8e",
        headingGray: "#333333",
      },
      fontFamily: {
        anton: [ 'Anton', 'sans-serif' ],
        poppins: [ 'Poppins', 'sans-serif' ],
        quicksand: [ 'Quicksand', 'sans-serif' ],
        raleway: [ 'Raleway', 'sans-serif' ],
      }
    },
  },
  plugins: [],
}

