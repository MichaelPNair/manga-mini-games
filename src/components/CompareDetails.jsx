import { useEffect, useState } from "react"
import axios from "axios"
import './CompareDetails.css'
import ShowManyTags from "./ShowManyTags"


export default function CompareDetails({guessId, title, authors, artists, publicationDemographic, status, year, theme, genre}) {

    const [guessDetails, setGuessDetails] = useState(null)

    useEffect(() => {

        axios.get(`https://api.mangadex.org/manga/${guessId}?includes%5B%5D=manga&includes%5B%5D=cover_art&includes%5B%5D=author&includes%5B%5D=artist`)
            .then(res => {

                setGuessDetails(res.data)
                // console.log(res.data)
            })
    }, [guessId])

    let titleGuess
    let authorsGuess
    let artistsGuess



    let publicationDemographicGuess
    let statusGuess
    let yearGuess
    let themeGuess
    let genreGuess

    let titleGuessMatch
    let authorsGuessMatch
    let artistsGuessMatch


    let publicationDemographicGuessMatch
    let statusGuessMatch
    let yearGuessMatch
    let themeGuessMatch
    let genreGuessMatch

    let authorsGuessMatchArray
    let aristsGuessMatchArray
    let themeGuessMatchArray
    let genreGuessMatchArray

    if (guessDetails) {
        titleGuess = guessDetails.data.attributes.title.en
        authorsGuess = guessDetails.data.relationships
            .filter(relationship => relationship.type === 'author')
            .map(relationship => relationship.attributes.name)

            artistsGuess = guessDetails.data.relationships
        .filter(relationship => relationship.type === 'artist')
        .map(relationship => relationship.attributes.name)




        publicationDemographicGuess = guessDetails.data.attributes.publicationDemographic
        if (publicationDemographicGuess === null) {
            publicationDemographicGuess = 'n/a'
        }
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


        title === titleGuess ? titleGuessMatch = 'match' : titleGuessMatch = 'no-match'
     
        publicationDemographic === publicationDemographicGuess ? publicationDemographicGuessMatch = 'match' : publicationDemographicGuessMatch = 'no-match'

        status === statusGuess ? statusGuessMatch = 'match' : statusGuessMatch = 'no-match'
        year === yearGuess ? yearGuessMatch = 'match' : yearGuessMatch = 'no-match'

   
        authorsGuessMatch = checkArrays(authors, authorsGuess)
        artistsGuessMatch = checkArrays(artists, artistsGuess)
        themeGuessMatch = checkArrays(theme, themeGuess)
        genreGuessMatch = checkArrays(genre, genreGuess)

        authorsGuessMatchArray = authorsGuess.map(guess => authors.indexOf(guess) !== -1)
        aristsGuessMatchArray = artistsGuess.map(guess => artists.indexOf(guess) !== -1)
        themeGuessMatchArray = themeGuess.map(guess => theme.indexOf(guess) !== -1)
        genreGuessMatchArray = genreGuess.map(guess => genre.indexOf(guess) !== -1)

        if (year > yearGuess) {
            yearGuess = `↑↑\n${yearGuess}`
        }

        if (year < yearGuess) {
            yearGuess = `${yearGuess}\n↓↓`
        }

        
        
    }

    function checkArrays(originalArray, guessArray) {

        
        if (originalArray.sort().join('') === guessArray.sort().join('')){
            return 'match'
        }


        for (let i =0; i< guessArray.length; i++) {
            if (originalArray.indexOf(guessArray[i]) !== -1) {
                return 'part-match'
            }
        }

        return 'no-match'

    }
    
    return <>
        {  guessDetails && 
        <>
            <div className={titleGuessMatch}>{titleGuess}</div>
            <div className={authorsGuessMatch}><ShowManyTags guessArray={authorsGuess} guessMatchArray={authorsGuessMatchArray}/></div>
            <div className={artistsGuessMatch}><ShowManyTags guessArray={artistsGuess} guessMatchArray={aristsGuessMatchArray}/></div>
            <div className={publicationDemographicGuessMatch}>{publicationDemographicGuess}</div>
            <div className={statusGuessMatch}>{statusGuess}</div>
            <div className={yearGuessMatch}>{yearGuess}</div>
            <div className={genreGuessMatch}><ShowManyTags guessArray={genreGuess} guessMatchArray={genreGuessMatchArray}/></div>
            <div className={themeGuessMatch}><ShowManyTags guessArray={themeGuess} guessMatchArray={themeGuessMatchArray}/></div>
         </>

        }
    </>
}