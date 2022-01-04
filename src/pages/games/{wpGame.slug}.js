import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'

export const query = graphql`
  query ($id: String) {
    wpGame (id: {eq: $id}) {
      gameMeta {
        description
        fieldGroupName
        metascore
        platform
        price
        publisher
        releaseDate
        series
        systemRequirements {
          fieldGroupName
          graphics
          memory
          processor
          storage
        }
        title
        gameImage {
          id
          link
          uri
        }
      }
    }
  }
`


const GamePage = ({data: {wpGame: {gameMeta: game}}}) => {
  return (
    <Layout pageTitle={game.title}>
      <div>
        <div dangerouslySetInnerHTML={{__html: game.description}}/>
        <p>Metascore: {game.metascore}</p>
        <p>Price: {game.price}</p>
        <p>Platform(s): {game.platform}</p> {/*eventueel mappen en dan spatie tussen elk element van array*/}
        <p>Publisher: {game.publisher}</p>
        <p>Release Date: {game.releaseDate}</p>
        <p>Series: {game.series}</p>
        <h2>System Requirements</h2>
        <p>Processor: {game.systemRequirements.processor}</p>
        <p>Graphics: {game.systemRequirements.graphics}</p>
        <p>Memory: {game.systemRequirements.memory}</p>
        <p>Storage: {game.systemRequirements.storage}</p>
      </div>
    </Layout>
  )
}

export default GamePage