// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    defaultLineHeights: true,
    standardFontWeights: true,
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
        sans: ['Garet', 'Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Ubuntu Mono', 'Roboto Mono', 'Menlo', 'monospace'],
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
      },
      boxShadow: {
        'box-purple': '-7px 7px 0 rgb(132, 23, 221)',
      },
      textShadow: {
        'headline-purple': '-4px 4px 0 rgb(132, 23, 221)',
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
        'brand-gray-lighter': '#979797',
        'brand-gray-light': '#F1EFEF',
        'brand-eggshell': '#f8f8f8',
        'gray-primary': '#242323',
        'hubblr-purple': '#8417dd',
        'hubblr-turquoise': '#4ad0d9',
        'hubblr-blue': '#4299e1',
        'hubblr-green': '#4fd1c5',
      },
    },
  },
  variants: {},
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/custom-forms'),
    // eslint-disable-next-line global-require
    require('tailwindcss-textshadow'),
  ],
};
