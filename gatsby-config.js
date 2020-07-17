module.exports = {
  siteMetadata: {
    title: `Erin Fox `,
    description: `Portfolio`,
    author: `Erin Fox`,
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "about",
        link: "/about",
      },
      {
        name: "blog",
        link: "/blog",
      },
      {
        name: "contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xrx4c7j282ac`,
        accessToken: `_wCUOQaQQSDXB08_2kUU8FHGrhIL49nRH3NC-fdH1sE`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fox.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
