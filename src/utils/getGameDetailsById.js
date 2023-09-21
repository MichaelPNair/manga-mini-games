import axios from "axios";

export default function getGameDetailsById(gameId){
    // return axios.get(`https://api.rawg.io/api/games/${gameId}?key=ef0d07425fea44dc864de7b8d7534452`)

    return axios.get(`/api/games/${gameId}`)


}