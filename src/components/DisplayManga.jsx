import { useEffect, useState } from "react"
import axios from "axios"
import "./DisplayManga.css"


export default function DisplayManga({mangaId}) {

    const [mangaDetails, setMangaDetails] = useState(null)

    useEffect(() => {

        axios.get(`https://api.mangadex.org/manga/${mangaId}?includes%5B%5D=manga&includes%5B%5D=cover_art&includes%5B%5D=author&includes%5B%5D=artist`)
            .then(res => {

                setMangaDetails(res.data)
            })
 

    }, [mangaId])

    let title 
    let authors
    let artists
    let coverId
    let altTitles

    if (mangaDetails) {
        title = mangaDetails.data.attributes.title.en
        authors = mangaDetails.data.relationships
            .filter(relationship => relationship.type === 'author')
            .map(relationship => relationship.attributes.name)
            .join(', ')

        artists = mangaDetails.data.relationships
        .filter(relationship => relationship.type === 'artist')
        .map(relationship => relationship.attributes.name)
        .join(', ')

        altTitles = mangaDetails.data.attributes.altTitles
            .filter(title => title['en'] !== undefined)
            .map(title => title.en)
            .join(', ')

        coverId = mangaDetails.data.relationships
            .filter(relationship => relationship.type === 'cover_art')[0].attributes.fileName

        
    }




    return <div className="display-manga-area">
        {
            mangaDetails ?
            <section className="display-manga-section">
                <img src={`https://uploads.mangadex.org/covers/${mangaId}/${coverId}.256.jpg`} alt="cover art" /> 
                <div className="manga-section-right-box">
                    <p>Title: {title}</p>
                    {altTitles.length > 0 && <p>Alt Title: {altTitles}</p>}
                    <p>Author: {authors}</p>
                    <p>Artist: {artists}</p>
                    <p>Description: {mangaDetails.data.attributes.description.en}</p>
                </div>
            </section>
           :
           <section className="loading-manga-section">Loading ...</section>
        }
    </div>
}