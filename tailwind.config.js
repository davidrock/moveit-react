const defaultTheme = require("tailwindcss/defaultTheme");
const percentageWidth = require("tailwindcss-percentage-width");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ["Inter", ...defaultTheme.fontFamily.sans],
      rajdhani: ["Rajdhani", "Georgia", ...defaultTheme.fontFamily.sans],
      gothic: ["DotGothic16", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      width: {
        "0/100": "0%",
        "1/100": "10%",
        "2/100": "20%",
        "3/100": "30%",
        "4/100": "40%",
        "5/100": "50%",
        "6/100": "60%",
        "7/100": "70%",
        "8/100": "80%",
        "9/100": "90%",
        "10/100": "100%",
      },
      left: {
        "0/100": "0%",
        "1/100": "10%",
        "2/100": "20%",
        "3/100": "30%",
        "4/100": "40%",
        "5/100": "50%",
        "6/100": "60%",
        "7/100": "70%",
        "8/100": "80%",
        "9/100": "90%",
        "10/100": "100%",
      },
      right: {
        "0/100": "0%",
        "1/100": "10%",
        "2/100": "20%",
        "3/100": "30%",
        "4/100": "40%",
        "5/100": "50%",
        "6/100": "60%",
        "7/100": "70%",
        "8/100": "80%",
        "9/100": "90%",
        "10/100": "100%",
      },
      colors: {
        gelo: "#F2F3F5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [percentageWidth],
};
