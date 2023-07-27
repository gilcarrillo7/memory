/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      sans: ["Handjet", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#3DC681",
        secondary: "#151F38",
        tertiary: "#009491",
        light: "#D1FAE0",
        danger: "#E95646",
      },
      opacity: {
        80: ".8",
      },
    },
  },
  plugins: [],
};
