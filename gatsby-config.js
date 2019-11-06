const manifestConfig = require('./manifest-config');
const dotenv = require('dotenv')

if (process.env.NODE_ENV != 'production') {
  dotenv.config()
}

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: manifestConfig,
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId:`b6lrqzvm884p`,
        accessToken: 'nMIHgffXol2t-vxidFNo8pk5wi9-FdnaPQagxLGpWyE'
        //accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-151689367-1",
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    'gatsby-transformer-remark',
    'gatsby-plugin-offline',
  ]
}
