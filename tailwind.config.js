// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ['./src/**/*.jsx'],
  },
  theme: {
    extend: {
      flexGrow: {
        2: '2',
      },
      fontFamily: {
        'sans': ['Garet', 'Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
        'mono': ['Ubuntu Mono', 'Roboto Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        '7xl': '5rem',
      },
      height: {
        '1/2': '50%',
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
      screens: {
        'max-sm': { max: '639px' },
        'max-md': { max: '767px' },
        '2xl': { min: '1950px' },
      },
      boxShadow: {
        'box-purple': '-7px 7px 0 rgba(93,28,144, 0.8)',
      },
      textShadow: {
        'header-purple': '-7px 7px 0 rgba(93,28,144, 0.8)',
      },
      spacing: {
        '1/2': '50%',
        '3/4': '75%',
        96: '24rem',
        larger: '50rem',
        huge: '80rem',
      },
      transformOrigin: {
        'center-top': 'center top',
      },
      zIndex: {
        '-10': '-10',
        '-5': '-5',
      },
      colors: {
        'brand-gray': '#7C7C7C',
        'brand-gray-dark': '#464545',
        'brand-gray-darkest': '#2D2D2D',
        'brand-eggshell': '#f8f8f8',
        'gray-primary': '#242323',
      },
    },
  },
  variants: {},
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/custom-forms'), require('tailwindcss-textshadow')],
};
