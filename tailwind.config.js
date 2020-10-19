// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '7xl': '5rem',
      },
      inset: {
        '3': '3rem',
        '1/2': '50%',
      },
      spacing: {
        '1/2': '50%',
        '96': '24rem',
        'huge': '80rem',
      },
      rotate: {
        '270': '270deg',
      }
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
