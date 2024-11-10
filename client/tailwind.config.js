/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-black": "#080708",
        "main-white": "#E6E8E6",
        accent: "#B33951",
        second: "#DDF8E8",
        third: "#8789C0",
      },
    },
  },
  plugins: [],
};
