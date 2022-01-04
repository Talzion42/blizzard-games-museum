import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 

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
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          altText
        }
      }
    }
  }
`


const GamePage = ({data: {wpGame: {gameMeta: game}}}) => {
  const image = getImage(game.gameImage.localFile);

  return (
    <Layout pageTitle={game.title}>
      <div>
        <GatsbyImage image={image} alt={game.gameImage.altText} />
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