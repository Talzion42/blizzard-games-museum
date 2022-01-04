import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'


const GamesPage = ({data: {allWpGame: {edges}}}) => {
  return (
    <Layout pageTitle="Games in the Blizzard Games Museum">
      {edges.map((item) => {
        const game = item.node.gameMeta;
        const slug = item.node.slug;
        return <Link to={`/games/${slug}`}>
          <p key={item.node.id}>{game.title}</p>
        </Link>
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
  allWpGame {
    edges {
      node {
        id
        slug
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