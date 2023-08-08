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




    return <div>
        <img src={`https://uploads.mangadex.org/covers/${mangaId}/${mangaDetails.data.relationships[2].attributes.fileName}.256.jpg`} alt="cover art" />
        {mangaDetails.data.attributes.title.en && <p>Title: {mangaDetails.data.attributes.title.en}</p>}
        {mangaDetails.data.attributes.altTitles.en && <p>Alt title: {mangaDetails.data.attributes.altTitles.en}</p>}
        <p>Author: {mangaDetails.data.relationships[0].attributes.name}</p>
        <p>Artist: {mangaDetails.data.relationships[1].attributes.name}</p>
    </div>
}