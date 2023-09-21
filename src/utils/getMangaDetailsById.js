import axios from "axios";

export default function getMangaDetailsById(mangaId){
    // return axios.get(`https://api.mangadex.org/manga/${mangaId}?includes%5B%5D=manga&includes%5B%5D=cover_art&includes%5B%5D=author&includes%5B%5D=artist`)

    return axios.get(`/api/manga/${mangaId}`)
}