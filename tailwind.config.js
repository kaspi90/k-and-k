/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        blue: "#224CA6",
        violet: "#671595",
      },
    },
    fontFamily: {
      sans: ["SignikaNegative"],
    },
  },

  plugins: [require("flowbite/plugin")],
};
