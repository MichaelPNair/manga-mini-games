import axios from "axios";

export default function getMovieDetailsById(movieId){

    return axios.get(`/api/movies/${movieId}`)


}