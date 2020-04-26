// require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // apiToken: process.env.DATO_API_TOKEN,
        apiToken: `14170f974b686fea67e4f73a5c8763`,
      },
    },
  ],
}
