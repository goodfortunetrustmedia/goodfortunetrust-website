/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Good Fortune Trust`,
    siteUrl: `https://www.goodfortunetrust.org`,
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/gft_logo_small.png",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5p61221bq9gd`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
  ],
};
