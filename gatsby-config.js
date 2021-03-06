module.exports = {
  siteMetadata: {
    title: `Erin Fox `,
    description: `Portfolio`,
    author: `Erin Fox`,
    menuLinks: [
      // {
      //   name: "HOME",
      //   link: "/",
      // },
      {
        name: "BLOG",
        link: "/blog",
      },
      {
        name: "ABOUT",
        link: "/about",
      },
      {
        name: "TALKS",
        link: "/talks",
      },
      {
        name: "CONTACT",
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fox.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // replace "UA-XXXXXXXXX-X" with your own Tracking ID
    //     trackingId: "UA-XXXXXXXXX-X",
    //   },
    // },
  ],
}
