import axios from "axios";

export default function getMangaSearchByText(searchText){
    // return axios.get(`https://api.mangadex.org/manga?limit=9&title=${searchText}&includedTagsMode=AND&excludedTagsMode=OR&contentRating%5B%5D=safe&contentRating%5B%5D=suggestive&contentRating%5B%5D=erotica&order%5Brelevance%5D=desc&includes%5B%5D=manga&includes%5B%5D=cover_art&includes%5B%5D=author&includes%5B%5D=artist`)

    return axios.put(`/api/manga/search`, {searchText: searchText})
}