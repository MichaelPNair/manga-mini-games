import { useEffect, useState } from "react"
import axios from "axios"


export default function CompareDetails({guessId, title, authors, artists, publicationDemographic, status, year, theme, genre}) {

    const [guessDetails, setGuessDetails] = useState(null)

    useEffect(() => {

        axios.get(`https://api.mangadex.org/manga/${guessId}?includes%5B%5D=manga&includes%5B%5D=cover_art&includes%5B%5D=author&includes%5B%5D=artist`)
            .then(res => {

                setGuessDetails(res.data)
                console.log(res.data)
            })
    }, [guessId])

    let titleGuess
    let authorsGuess
    let artistsGuess
    let coverIdGuess
    let altTitlesGuess
    let publicationDemographicGuess
    let statusGuess
    let yearGuess
    let themeGuess
    let genreGuess

    if (guessDetails) {
        titleGuess = guessDetails.data.attributes.title.en
        authorsGuess = guessDetails.data.relationships
            .filter(relationship => relationship.type === 'author')
            .map(relationship => relationship.attributes.name)
            .join(', ')

            artistsGuess = guessDetails.data.relationships
        .filter(relationship => relationship.type === 'artist')
        .map(relationship => relationship.attributes.name)
        .join(', ')

        altTitlesGuess = guessDetails.data.attributes.altTitles
            .filter(title => title['en'] !== undefined)

        coverIdGuess = guessDetails.data.relationships
            .filter(relationship => relationship.type === 'cover_art')[0].attributes.fileName

        publicationDemographicGuess = guessDetails.data.attributes.publicationDemographic
        statusGuess = guessDetails.data.attributes.status
        yearGuess = guessDetails.data.attributes.year
            
        themeGuess = guessDetails.data.attributes.tags
        .filter(tag => tag.type === 'tag')
        .filter(tag => tag.attributes.group === 'theme')
        .map(tag => tag.attributes.name.en)

        genreGuess = guessDetails.data.attributes.tags
        .filter(tag => tag.type === 'tag')
        .filter(tag => tag.attributes.group === 'genre')
        .map(tag => tag.attributes.name.en)
    
    }

    return <div>
        <section>

        </section>
    </div>
}