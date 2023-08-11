import axios from "axios";
import { getToken } from "./users_service";

export function updateMangaWordleCount(username){
    return axios.put(`/api/gameCount/mangawordle`, {username: username}, {headers: {Authorization: `Bearer ${getToken()}`}})
}

export function updateMangaGuessCount(username){
    return axios.put(`/api/gameCount/mangaguess`, {username: username}, {headers: {Authorization: `Bearer ${getToken()}`}})
}

export function getWinCounts(){
    return axios.get(`/api/gameCount`, {headers: {Authorization: `Bearer ${getToken()}`}})
}