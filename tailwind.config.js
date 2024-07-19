/** @type {import('tailwindcss').Config} */
export default {
  content: [`./index.html`, `./src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        "custom-300": "200px",
        "custom-400": "400px",
        "custom-500": "500px",
        "custom-1000": "1000px",
        "custom-1100": "1100px",
        "custom-1200": "1200px",
      },
    },
  },
  plugins: [],
};
