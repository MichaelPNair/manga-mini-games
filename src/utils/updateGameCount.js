import axios from "axios";
import { getToken } from "./users_service";

export function updateWordleCount(username){
    return axios.post(`/api/gameCount/mangawordle`, username, {headers: {Authorization: `Bearer ${getToken()}`}})
}

export function updateMangaGuessCount(username){
    return axios.post(`/api/gameCount/mangaguess`, username, {headers: {Authorization: `Bearer ${getToken()}`}})
}