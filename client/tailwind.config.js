/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      h: [
        "Maiandra GD",
        "ui-serif",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
    },
    extend: {
      colors: {
        "main-black": "#080708",
        "main-white": "#E6E8E6",
        accent: "#8789C0",
        second: "#DDF8E8",
        third: "#B33951",
      },
    },
  },
  plugins: [],
};
