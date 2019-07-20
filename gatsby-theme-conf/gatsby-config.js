let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

console.log(`Using graphql: '${process.env.GATSBY_GRAPHQL_IDE}'`)

module.exports = {
  siteMetadata: {
    title: "Gatsby Theme for conference landing page",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENFUL_SPACE_ID,
        accessToken: process.env.CONTENFUL_API_TOKEN
      },
    },
    "gatsby-plugin-theme-ui"
  ]
}
