import * as React from "react"
import Layout from "../components/layout"
import Game from "../components/game"
import Footer from "../components/footer"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from 'gatsby'
import { header, headerInfo, headerPicture, headerTitle, CTA, section, subtitle, games } from '../page.module.css'

const IndexPage = ({ data: { wpPage: { homePage } } }) => {
  const image = getImage(homePage.headerHome.picture.localFile)

  return (
    <main>
      <Layout>
        <div className={header}>
          <div className={headerInfo}>
            <h1 className={headerTitle}>{homePage.headerHome.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: homePage.headerHome.description }} />
            <a className={CTA} target="__blank" href={homePage.callToAction.link}>
              {homePage.callToAction.linkText}
            </a>
          </div>
          <div>
            <GatsbyImage
              image={image}
              className={headerPicture}
              alt={homePage.headerHome.picture.altText}
            />
          </div>
        </div>

        <div className={section}>
          <h2 className={subtitle}>{homePage.featuredGames.title}</h2>
          <p>{homePage.featuredGames.description}</p>
          <div className={games}>
            {homePage.featuredGames.games.map(game => (
              <Game slug={`games/${game.slug}`} key={game.id} game={game} />
            ))}
          </div>
        </div>
        <Footer siteTitle={homePage.headerHome.title}/>
      </Layout>
    </main>
  )
}




export const query = graphql`
query {
  wpPage(slug: {eq: "home-page"}) {
      homePage {
        headerHome {
          description
          title
          picture {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 500, height: 500)
              }
            }
          }
        }
        callToAction {
          linkText
          link
        }
        featuredGames {
          games {
            ... on WpGame {
              id
              gameMeta {
                title
                gameImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
                    }
                  }
                }
              }
              slug
            }
          }
          description
          title
        }
      }
    }
  }
`

export default IndexPage
