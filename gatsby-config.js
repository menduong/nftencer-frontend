const globImporter = require('node-sass-glob-importer');

module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-367HCBT3P8", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          anonymize_ip: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          importer: globImporter(),
        },
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-typescript`,
    'gatsby-plugin-tsconfig-paths',
  ],
  siteMetadata: {
    title: "Coconut Global NFT Marketplace",
    titleTemplate: "Coconut Global NFT Marketplace",
    description:
      "Coconut Global - The best global short video NFT Marketplace",
    url: "https://app.coconut.global", // No trailing slash allowed!
    image: "./public/ccn_logoOF.png", // Path to the image placed in the 'static' folder, in the project's root directory.
    // twitterUsername: "@occlumency",
  },
};
