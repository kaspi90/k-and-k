/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      screens: { sm: { max: "639px" }, md: { max: "300px" } },
      colors: {
        blue: "#224CA6",
        lightblue: "#88E2FB",
        violet: "#671595",
      },
    },
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
  },

  plugins: [require("flowbite/plugin")],
};
