/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind liefert Reset (Preflight) und Hilfsklassen wie .sr-only;
  // das Design selbst steckt in src/styles (Tokens + Komponenten).
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
