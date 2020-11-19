const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `hubblr`,
    titleTemplate: `%s | hubblr`,
    description: `Bei hubblr entwickeln wir innovative Softwareprodukte mit der Aufschrift “Made in Germany” und unterstützen Sie vom MVP bis hin zur komplexen Enterprise Software. `,
    url: `https://hubblr.io`,
    image: '/images/featured-image.jpg',
    author: `@hubblr`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hubblr-website`,
        short_name: `hubblr`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal['400'],
        display: `minimal-ui`,
        icon: `src/images/fav.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
