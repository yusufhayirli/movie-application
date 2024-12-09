import React from 'react';
import { Link } from "react-router-dom";

interface Props {
  movies: Array<{
    Poster: string;
    Title: string;
    Year: string;
    imdbID: string;
  }>;
}

const MovieInfo = ({movies} : Props) => {
  return (
    <div className="movie-info">          
      <table className="table">
        <thead>
          <tr className='table-primary'>
            <th scope="col">#</th>
            <th scope="col">Poster</th>
            <th scope="col">Name</th>
            <th scope="col">Release Year</th>
            <th scope="col">IMDB ID</th>
          </tr>
        </thead>
        <tbody className='movie-table-body'>
          {movies.map((movie, i) => 
            <tr className='movie-row' key={movie.imdbID}>
              <th scope="row">{i+1}</th>
              <td>
                <Link
                  to={`/movie/${movie.imdbID}`}
                  state={{ movie }}
                >
                  <img src={movie.Poster} alt="" />
                </Link>
              </td>
              <td>
                <Link
                    className='movie-name'
                    to={`/movie/${movie.imdbID}`}
                    state={{ movie }}
                >
                  {movie.Title}
                </Link>
              </td>
              <td>{movie.Year}</td>
              <td>{movie.imdbID}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MovieInfo;
