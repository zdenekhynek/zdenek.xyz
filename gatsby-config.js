module.exports = {
  siteMetadata: {
    title: "zdenek.xyz",
  },
  plugins: [
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
    "gatsby-transformer-remark",
    "gatsby-plugin-remove-trailing-slashes",
  ],
};
