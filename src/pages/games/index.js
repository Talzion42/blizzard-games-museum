import * as React from 'react'
import Layout from '../../components/layout'
import Game from '../../components/game'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { hero, section, subtitle, games, description } from '../../page.module.css'



const GamesPage = ({
  data: {
    allWpGame: {edges: gamesInfo},
    wpPage: {gamesPage},
   },
}) => {
  const image = getImage(gamesPage.headerGames.picture.localFile)

  return (
    <Layout pageTitle="Games in the Blizzard Games Museum">
      <GatsbyImage
        className={hero}
        image={image}
        alt={gamesPage.headerGames.picture.altText}
      />
      <div className={section}>
        <h2 className={subtitle}>{gamesPage.headerGames.title}</h2>
        <div
        className={description}
          dangerouslySetInnerHTML={{
            __html: gamesPage.headerGames.description,
          }}
        />
        <div className={games}>
        {gamesInfo.map(({node:game}) => (
          <Game key={game.id} slug={game.slug} game={game} />
        ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
  wpPage(slug:{eq: "games"}) {
    gamesPage {
      headerGames {
        description
        title
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality:100
                placeholder:BLURRED
                layout: FULL_WIDTH
                )
            }
          }
        }
      }
    }
  }
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
          gameImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder:BLURRED
                  transformOptions: {grayscale:true}
                  )
              }
            }
          }
        }
       }
     }
  }
}
`


export default GamesPage