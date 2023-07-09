/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontFamily: {
      sans: ['"Noto Sans TC"', ...defaultTheme.fontFamily.sans],
      serif: ['"Noto Serif TC"', ...defaultTheme.fontFamily.serif],
    },
    fontWeight: {
      normal: 400,
      medium: 400,
      bold: 700,
    },
    extend: {},
  },
};
