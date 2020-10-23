// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      flexGrow: {
        2: '2',
      },
      fontFamily: {
        sans: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '7xl': '5rem',
      },
      height: {
        '1/8': '12.5%',
      },
      inset: {
        3: '3rem',
        '1/2': '50%',
      },
      margin: {
        '-10px': '-10px',
      },
      rotate: {
        270: '270deg',
      },
      spacing: {
        '1/2': '50%',
        '3/4': '75%',
        96: '24rem',
        larger: '50rem',
        huge: '80rem',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require('@tailwindcss/custom-forms')],
};
