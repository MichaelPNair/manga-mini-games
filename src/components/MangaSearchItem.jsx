import './MangaSearchItem.css'

export default function MangaSearchItem({id, title, altTitles, authors, artists, onClick}){



    return <div className="manga-search-item" onClick={() => onClick(id, title, altTitles, authors, artists)}>
            <p>Title: {title}</p>
            {altTitles.length > 0 && <p>Alt Title: {altTitles}</p>}
            <p>Author: {authors}</p>
            <p>Artist: {artists}</p>
    </div>
}