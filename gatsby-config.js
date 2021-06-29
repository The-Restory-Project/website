/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "The Restory Project",
    description: `Changing the stories we tell about ourselves`,
    author: `@ubercoolchicken`,
    siteUrl: `https://www.therestoryproject.in`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Book",
        link: "/book",
      },
      {
        name: "Shop",
        link: "/shop",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Collaborations",
        link: "/collaborations",
      },
      {
        name: "Resources",
        link: "/resources",
      },
      {
        name: "Contact",
        link: "/contact",
      },
      {
        name: "Blog",
        link: "/blog",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-C6W37XKKMF",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is also optional
        respectDNT: true,

        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,

        enableWebVitalsTracking: true,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        forceFullSync: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`spectral`, `opensans`],
        display: "swap",
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
  ],
};
