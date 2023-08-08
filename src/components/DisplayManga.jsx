import { useEffect, useState } from "react"
import axios from "axios"


export default function DisplayManga({mangaId}) {

    const [mangaDetails, setMangaDetails] = useState(null)

    useEffect(() => {

        axios.get(`https://api.mangadex.org/manga/a1c7c817-4e59-43b7-9365-09675a149a6f?includes%5B%5D=manga&includes%5B%5D=cover_art&includes%5B%5D=author&includes%5B%5D=artist`)
            .then(res => {
                setMangaDetails(res.data)
            })


    }, [mangaId])


    // console.log(mangaDetails.data.relationships[2].attributes)
    console.log(mangaId)
    console.log(mangaDetails)




    let mangaName = mangaDetails.data.attributes.title.en
    let author = mangaDetails.data.relationships[0].attributes.name
    let artist = mangaDetails.data.relationships[1].attributes.name
    let coverId = mangaDetails.data.relationships[2].attributes.fileName

    console.log(coverId)

    let coverArtString = `https://uploads.mangadex.org/covers/${mangaDetails.data.id}/${coverId}.256.jpg`

    return <div>
        <img src={coverArtString} alt="cover art" />
        <p>Name: {mangaName}</p>
        <p>Author: {author}</p>
        <p>Artist: {artist}</p>
    </div>
}