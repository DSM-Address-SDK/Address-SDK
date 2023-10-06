/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        highlight: "#DE781F",
        hover: "#F5F5F5",
        gray: "#AAAAAA",
        footer: "#EEEEEE",
        white: "#FFFFFF",
      },
      fontWeight: {
        bold: 700,
        medium: 500,
        regular: 400,
      },
    },
  },
  plugins: [],
};
