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
        '3/4': '75%',
        '96': '24rem',
        'huge': '80rem',
      },
      margin: {
        '-10px': '-10px',
      },
      rotate: {
        '270': '270deg',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
