module.exports = {
  siteMetadata: {
    title: "Blizzard Games Museum",
    description: "The Blizzard Games Museum (BGM) is an homage to all the classic titles of the (once-)great developer in Blizzard Entertainment.",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://blizzard-games-museum.local/graphql"
      }
    }
  ],
};