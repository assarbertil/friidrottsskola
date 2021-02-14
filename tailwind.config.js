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
          },
        },
      }),
    },
    colors: {
      // Build your palette here
      transparent: "transparent",
      current: "currentColor",
      gray: colors.trueGray,
      white: "white",
      black: "black",
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      green: colors.green,
      semitransparent: "#000000d0",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
