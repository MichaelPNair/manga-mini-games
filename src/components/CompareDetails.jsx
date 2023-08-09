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

    return <div>
        <section>

        </section>
    </div>
}