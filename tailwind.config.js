const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", ...defaultTheme.fontFamily.sans],
      },
      textShadow: {
        "3xl": "3px 3px 7px white",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
