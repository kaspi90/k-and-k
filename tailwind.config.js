/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "text-primary-blue": "#224CA6",
      },
    },
    fontFamily: {
      sans: ["SignikaNegative"],
    },
  },

  plugins: [require("flowbite/plugin")],
};
