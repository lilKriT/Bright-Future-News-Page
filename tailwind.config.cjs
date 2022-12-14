/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js"],
  theme: {
    extend: {
      colors: {
        // Primary
        softOrange: "hsl(35, 77%, 62%)",
        softRed: "hsl(5, 85%, 63%)",
        // Neutral
        offWhite: "hsl(36, 100%, 99%)",
        grayishBlue: "hsl(233, 8%, 79%)",
        darkGrayishBlue: "hsl(236, 13%, 42%)",
        veryDarkBlue: "hsl(240, 100%, 5%)",
      },
      gridTemplateColumns: {
        desktop: "repeat(3, minmax(0, 1fr))",
        mobile: "1fr",
      },
      gridTemplateRows: {
        desktop: "17.5rem auto auto",
        mobile: "1fr",
      },
      boxShadow: {
        tint: "inset 0 0 0 100vmax rgb(0 0 0 / .5)",
      },
    },
  },
  plugins: [],
};
