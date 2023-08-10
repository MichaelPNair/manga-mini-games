import './MangaSelected.css'

export default function MangaSelected({id, title, altTitles, authors, artists, onClick}){

    

    return <div className='manga-selected' onClick={onClick}>
        <span className="top-right-fake-close">X</span>
        <p>Title: {title}</p>
        {altTitles.length > 0 && <p>Alt Title: {altTitles}</p>}
        <p>Author: {authors}</p>
        <p>Artist: {artists}</p>
    </div>
}