/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  important: ["#app"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "main-color": "#62462C",
        "main-color-light": "#AF8149",
        "main-color-dark": "#3D2F1A",
        "main-dark": "#121B39",
        "main-dark-light": "#121B39",
        "main-light": "#ffffff",
      },
    },
    fontFamily: {
      Vazirmatn: ["Vazirmatn"],
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
