module.exports = {
  siteMetadata: {
    title: "zdenek.xyz",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-remove-trailing-slashes",
  ],
};
