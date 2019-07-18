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
  plugins: ["gatsby-plugin-theme-ui"],
}
