/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      display: ["group-hover", "project-tile-hover"],
    },
  },
  theme: {
    extend: {
      screens: {
        betterhover: { raw: "(hover: hover)" },
        medium: "481px",
        "3xl": "1600px",
        "4xl": "1800px",
        "2k": "2048",
        "3k": "2560",
        "4k": "3840",
      },
    },
  },
  plugins: [],
};
