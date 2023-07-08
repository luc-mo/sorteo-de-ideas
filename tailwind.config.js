/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regular: ["BasierCircle-Regular", "sans-serif"],
        medium: ["BasierCircle-Medium", "sans-serif"],
        bold: ["BasierCircle-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
