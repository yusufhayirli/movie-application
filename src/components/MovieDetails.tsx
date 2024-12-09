import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";

interface MovieDetailsTypes {
    Poster: string;
    Title: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Actors: string;
    Released: string;
    imdbRating: string;
    imdbVotes: string;
    Language: string;
    BoxOffice: string;
    imdbID: string;
    Awards: string;
    Plot: string;
}

const MovieDetails = () => {

    const [movieDetails, setMovieDetails] = useState<MovieDetailsTypes | null>(null);

    const { id } = useParams();
    const getMovieDetails = useCallback(async () => {
        const url = `http://www.omdbapi.com/?i=${id}&plot=full&apikey=2c2300cd`

        const response = await fetch(url);
        const responseJson = await response.json();
        if (responseJson) {
            setMovieDetails(responseJson);
            console.log(responseJson)
        }
    }, [id]); // Include `id` as a dependency

    useEffect(() => {
        getMovieDetails();
    }, [getMovieDetails])

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-details-page">
            <h1>Movie Details</h1>
            <div className="container">
                <hr />
                <div className="movie-details-container">
                    <div className="movie-poster">
                        <img src={movieDetails.Poster} alt={`${movieDetails.Title} Poster`} />
                        <Link to="/" className="btn btn-primary">Return to Home</Link>
                    </div>
                    <div className="movie-info">
                        <h2>{movieDetails.Title || "N/A"}</h2>
                        <p><strong>Duration:</strong> {movieDetails.Runtime || "N/A"}</p>
                        <p><strong>Genre:</strong> {movieDetails.Genre || "N/A"}</p>
                        <p><strong>Director:</strong> {movieDetails.Director || "N/A"}</p>
                        <p><strong>Cast:</strong> {movieDetails.Actors || "N/A"}</p>
                        <p><strong>Official Release Date:</strong> {movieDetails.Released || "N/A"}</p>
                        <p><strong>IMDB Rating:</strong> {movieDetails.imdbRating || "N/A"}</p>
                        <p><strong>IMDB Votes:</strong> {movieDetails.imdbVotes || "N/A"}</p>
                        <p><strong>Languages:</strong> {movieDetails.Language || "N/A"}</p>
                        <p><strong>Box Office:</strong> {movieDetails.BoxOffice || "N/A"}</p>
                        <p><strong>IMDB Movie ID:</strong> {movieDetails.imdbID || "N/A"}</p>
                        <p><strong>Awards:</strong> {movieDetails.Awards || "N/A"}</p>
                        <hr />
                        <p>{movieDetails.Plot || "N/A"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
