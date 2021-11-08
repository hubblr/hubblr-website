const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config');
require('dotenv').config();

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `hubblr`,
    titleTemplate: `%s | hubblr`,
    description: `Bei hubblr entwickeln wir innovative Softwareprodukte mit der Aufschrift “Made in Germany” und unterstützen Sie vom MVP bis hin zur komplexen Enterprise Software. `,
    url: `https://hubblr.io`,
    siteUrl: `https://hubblr.io`,
    image: '/images/featured-image.jpg',
    author: `@hubblr`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-image',
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        configPath: require.resolve(`./i18n/config.json`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hubblr-website`,
        short_name: `hubblr`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        display: `minimal-ui`,
        icon: `src/images/fav.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // eslint-disable-next-line
        postCssPlugins: [require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
