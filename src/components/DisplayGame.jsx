import { useEffect, useState } from "react"
import "./DisplayGame.css"
import getGameDetailsById from "../utils/getGameDetailsById"


export default function DisplayGame({gameId, gameAnswerName}) {

    const [gameDetails, setGameDetails] = useState(null)

    useEffect(() => {

        getGameDetailsById(gameId)
            .then(res => {

                setGameDetails(res.data)
            })
 

    }, [gameId])


    let gameName
    let description
    let metacritic
    let releaseDate
    let imageUrl
    let platforms
    let developers
    let publishers

    if (gameDetails) {
        gameName = gameDetails.name
        description = gameDetails.description_raw
        metacritic = gameDetails.metacritic
        releaseDate = gameDetails.released
        imageUrl = gameDetails.background_image

        platforms = gameDetails.platforms
            .map(platform => platform.platform.name)
            .join(', ')

        developers = gameDetails.developers
        .map(dev => dev.name)
        .join(', ')

        publishers = gameDetails.publishers
        .map(publisher => publisher.name)
        .join(', ')

    }




    return <div className="display-game-area">
        {
            gameDetails ?
            <section className="display-game-section">
                <img src={imageUrl} alt="game art" /> 
                <div className="game-section-right-box">
                    <p>{gameName}</p>
                    <p>Release Date: {releaseDate}</p>
                    <p>Metacritic: {metacritic}</p>
                    <p>Platforms: {platforms}</p>
                    <p>Developed By: {developers}</p>
                    <p>Published By: {publishers}</p>
                    <p>Description: {description}</p>
                </div>
            </section>
           :
           <section className="loading-game-section">Loading Game Details - {gameAnswerName} ...</section>
        }
    </div>
}