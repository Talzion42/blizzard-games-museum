import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'


const GamesPage = ({data: {allWpGame: {edges}}}) => {
  return (
    <Layout pageTitle="Games in the Blizzard Games Museum">
      {edges.map((item) => {
        const game = item.node.gameMeta;
        return <p key={item.node.id}>{game.title}</p>
      })}
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
  allWpGame {
    edges {
      node {
        id
        gameMeta {
          description
          metascore
          price
          publisher
          releaseDate
          series
          platform
          title
        }
       }
     }
  }
}
`


export default GamesPage