import { useEffect, useState } from "react"
import "./DisplayManga.css"
import getMangaDetailsById from "../utils/getMangaDetailsById"


export default function DisplayManga({mangaId, gameAnswerName}) {

    const [mangaDetails, setMangaDetails] = useState(null)

    useEffect(() => {

        getMangaDetailsById(mangaId)
            .then(res => {

                setMangaDetails(res.data)
            })
 

    }, [mangaId])

    let title 
    let authors
    let artists
    let coverId
    let altTitles
    let demographic
    let tags

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

        demographic = mangaDetails.data.attributes.publicationDemographic

        tags = mangaDetails.data.attributes.tags
            .map(tag => tag.attributes.name.en)
            .join(', ')

        
    }




    return <div className="display-manga-area">
        {
            mangaDetails ?
            <section className="display-manga-section">
                {/* <img src={`https://uploads.mangadex.org/covers/${mangaId}/${coverId}.256.jpg`} alt="cover art" />  */}
                <div className="manga-section-right-box">
                    <p>Title: {title}</p>
                    {altTitles.length > 0 && <p>Alt Title: {altTitles}</p>}
                    <p>Author: {authors}</p>
                    <p>Artist: {artists}</p>
                    <p>Demographic: {demographic}</p>
                    <p>Tags: {tags}</p>
                    <p>Description: {mangaDetails.data.attributes.description.en}</p>
                </div>
            </section>
           :
           <section className="loading-manga-section">Loading manga details -  {gameAnswerName} ...</section>
        }
    </div>
}