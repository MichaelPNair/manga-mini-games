import { useEffect, useState } from "react"
import "./DisplayMovie.css"
import getGameDetailsById from "../utils/getGameDetailsById"


export default function DisplayMovie({movieId, movieAnswerName}) {

    const [movieDetails, setMovieeDetails] = useState(null)

    useEffect(() => {

        getMovieDetailsById(movieId)
            .then(res => {

                setMovieDetails(res.data)
            })
 

    }, [movieId])


    let title
    let rated
    let released
    let runtime
    let genre
    let director
    let writer
    let plot
    let posterUrl

    if (movieDetails) {
        title = movieDetails.Title
        rated = movieDetails.Rated
        released = movieDetails.Released
        runtime = movieDetails.Runtime
        genre = movieDetails.Genre
        director = movieDetails.Director
        writer = movieDetails.Writer
        plot = movieDetails.Plot
        posterUrl = movieDetails.Poster



    }




    return <div className="display-movie-area">
        {
            movieDetails ?
            <section className="display-movie-section">
                <img src={posterUrl} alt="Movie art" /> 
                <div className="movie-section-right-box">
                    <p>{title}</p>
                    <p>Release Date: {released}</p>
                    <p>Runtime: {runtime}</p>
                    <p>Genre: {genre}</p>
                    <p>Director: {director}</p>
                    <p>Writer: {writer}</p>
                    <p>Plot: {plot}</p>
                </div>
            </section>
           :
           <section className="loading-movie-section">Loading Movie Details - {movieAnswerName} ...</section>
        }
    </div>
}