import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { wrapper, image, gameInfo, gameTitle,fullName} from "./game.module.css"

const Game = ({ game, slug }) => {
    const profile = getImage(game.gameMeta.gameImage.localFile)

    return (
      <Link className={wrapper} to={slug}>
        <GatsbyImage
          className={image}
          image={profile}
          alt={game.gameMeta.gameImage.altText}
        />
        <div className={gameInfo}>
          {game.gameMeta.title && <p className={gameTitle}>{game.gameMeta.title}</p>}
        </div>
      </Link>
    )
}

export default Game