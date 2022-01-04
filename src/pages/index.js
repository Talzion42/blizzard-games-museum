import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome to the Blizzard Games Museum!">
        <p>Lorem ipsum</p>
        <StaticImage
          alt="The Blizzard Entertainment logo."
          src="../images/blizzard-logo.png"
        />
      </Layout>
    </main>
  )
}

export default IndexPage
