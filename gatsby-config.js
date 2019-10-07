const dotenv = require('dotenv')
require('./src/sections/projects.css')

if (process.env.NODE_ENV != 'production') {
  dotenv.config()
}

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId:`b6lrqzvm884p`,
        accessToken: 'nMIHgffXol2t-vxidFNo8pk5wi9-FdnaPQagxLGpWyE'
       // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
  ]
}
