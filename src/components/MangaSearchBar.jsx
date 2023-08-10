import { useState, useEffect } from "react"
import axios from "axios"
import MangaSearchItem from "./MangaSearchItem"
import MangaSelected from "./MangaSelected"
import './MangaSearchBar.css'

export default function MangaSearchBar({onSubmit, searchText, isMangaSelected, updateSearchText, onSelectManga, onUnSelectManga}){

    // const [searchText, setSearchText] = useState('')

    const [searchResult, setSearchResult] = useState(null)

    // const [isMangaSelected, setIsMangaSelected] = useState(false)
    const [selectedManga, setSelectedManga] = useState({id: '', title: '', altTitles: '', authors:'',artists:''})

    function handleChange(e) {
        if (e.target.value.match(/^[a-zA-Z0-9 ]*$/)){
            updateSearchText(e.target.value)
        }
    }

    useEffect(() => {
        
        axios.get(`https://api.mangadex.org/manga?limit=9&title=${searchText}&includedTagsMode=AND&excludedTagsMode=OR&contentRating%5B%5D=safe&contentRating%5B%5D=suggestive&contentRating%5B%5D=erotica&order%5Brelevance%5D=desc&includes%5B%5D=manga&includes%5B%5D=cover_art&includes%5B%5D=author&includes%5B%5D=artist`)
            .then(res => {
                setSearchResult(res.data)
            })
    },[searchText])


    function showSearchResults(){
        if(searchResult && searchText.length > 0 && !isMangaSelected) {
            return searchResult.data.map(datum => <MangaSearchItem
                key = {datum.id}
                id = {datum.id} 
                title={datum.attributes.title.en} 
                altTitles={datum.attributes.altTitles
                    .filter(title => title['en'] !== undefined)
                    .map(title => title.en)
                    .join(', ')} 
                authors={datum.relationships
                    .filter(relationship => relationship.type === 'author')
                    .map(relationship => relationship.attributes.name)
                    .join(', ')} 
                artists={datum.relationships
                    .filter(relationship => relationship.type === 'artist')
                    .map(relationship => relationship.attributes.name)
                    .join(', ')}
                onClick={selectManga}
                />)
        }
    }

    function showSelectedManga(){
        if(searchResult && isMangaSelected){
            return <MangaSelected 
                id = {selectedManga.id} 
                title={selectedManga.title} 
                altTitles={selectedManga.altTitles} 
                authors={selectedManga.authors} 
                artists={selectedManga.artists}
                onClick={uncheckManga}
            />
        }
    }

    function selectManga(id, title, altTitles, authors, artists){
        onSelectManga()
        setSelectedManga({id: id, title: title, altTitles: altTitles, authors:authors, artists:artists})
    }

    function uncheckManga(){
        onUnSelectManga()
        setSelectedManga({id: '', title: '', altTitles: '', authors:'',artists:''})
    }

    function handleClick(){
        onSubmit(selectedManga.id)
        onUnSelectManga()
        setSelectedManga({id: '', title: '', altTitles: '', authors:'',artists:''})
        updateSearchText('')
    }


    return <div>
        <input hidden={isMangaSelected} type="text" value={searchText} onChange={handleChange} />
        {showSelectedManga()}
        <div className="search-results-grid">
            {showSearchResults()}
        </div>
        <button hidden={!isMangaSelected} onClick={handleClick}>Submit Guess</button>
    </div>
}