/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Roboto','sans-serif']
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}