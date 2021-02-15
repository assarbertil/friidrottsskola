const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        fri: "url('/assets/img/fri21-bg.jpg')",
      }),
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: "white",
            td: {
              paddingTop: "0",
              paddingRight: "0",
              paddingLeft: "0",
              paddingBottom: "0",
            },
          },
        },
      }),
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.trueGray,
      white: "white",
      black: "black",
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      green: colors.green,
      semitransparent: "#ffffffa0",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
