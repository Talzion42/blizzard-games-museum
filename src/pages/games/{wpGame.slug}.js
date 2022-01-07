import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {header, headerInfo, headerPicture, gameTitle, fullTitle, gameRoles, gameDescription, gameInfo } from '../../page.module.css'


const GamePage = ({ data: { wpGame: { gameMeta: game } } }) => {
  const image = getImage(game.gameImage.localFile);

  return (
    <Layout pageTitle={game.title}>
      <div className={header}>
        <div className={headerInfo}>
            {game.title && <h3 className={fullTitle}>{game.title}</h3>}

          <div className={gameDescription} dangerouslySetInnerHTML={{ __html: game.description }} />
          <div className={gameRoles} >Platform(s): {game.platform.map((platform, i=0) => (
            <span key={i}>
              {platform} {i + 1 < game.platform.length && "- "}
            </span>
          ))}
          </div>
          <p><span className={gameInfo} >Metascore: </span> {game.metascore}</p>
          <p><span className={gameInfo} >Price: </span> {game.price}</p>
          
          <p><span className={gameInfo} >Publisher: </span> {game.publisher}</p>
          <p><span className={gameInfo} >Release Date: </span> {game.releaseDate}</p>
          <p><span className={gameInfo} >Series: </span> {game.series}</p>
          <h2 className={gameTitle} >System Requirements</h2>
          <p><span className={gameInfo} >Processor: </span>{game.systemRequirements.processor}</p>
          <p><span className={gameInfo} >Graphics: </span> {game.systemRequirements.graphics}</p>
          <p><span className={gameInfo} >Memory: </span> {game.systemRequirements.memory}</p>
          <p><span className={gameInfo} >Storage: </span> {game.systemRequirements.storage}</p>
        </div>
        <GatsbyImage className={headerPicture} image={image} alt={game.gameImage.altText} />
      </div>
    </Layout>
  )
}





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

export default GamePage