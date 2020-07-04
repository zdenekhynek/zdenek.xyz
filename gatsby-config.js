module.exports = {
  siteMetadata: {
    title: "zdenek.xyz",
    description: "A full-stack developer building data-driven interfaces and digital products. London, UK.",
    image: "/about.jpg",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "contents",
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Zdenek.xyz",
        start_url: "/",
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
        ],
      },
    },
    "gatsby-plugin-remove-trailing-slashes",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        anonymize: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
};
