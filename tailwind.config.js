/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
    colors: {
      darkBlue: "#00031c",
      hoverBlue: "#6c56e4",
    },
    animation: {
      'spin-slow': 'spin 4s linear infinite',
    },
  },
  plugins: [flowbite.plugin()],
};
