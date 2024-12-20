import React from 'react';
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface Props {
  movies: Array<{
    Poster: string;
    Title: string;
    Year: string;
    imdbID: string;
  }>;
  onPageChange: Function;
  currentPage: number;
  totalResults: number;
}

const MovieInfo = ({ movies, onPageChange, currentPage, totalResults}: Props) => {
  const itemsPerPage = 10;
  const totalPages = Math.round(totalResults / 10) ;


  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    onPageChange(page);
  };

  return (
    <div className="movie-info">
      <table className="table">
        <thead>
          <tr className="table-primary">
            <th scope="col">#</th>
            <th scope="col">Poster</th>
            <th scope="col">Name</th>
            <th scope="col">Release Year</th>
            <th scope="col">IMDB ID</th>
          </tr>
        </thead>
        <tbody className="movie-table-body">
          {movies.map((movie, i) => (
            <tr className="movie-row" key={movie.imdbID}>
              <th scope="row">{(currentPage - 1) * itemsPerPage + i + 1}</th>
              <td>
                <Link to={`/movie/${movie.imdbID}`} state={{ movie }}>
                  <img src={movie.Poster} alt="" />
                </Link>
              </td>
              <td>
                <Link
                  className="movie-name"
                  to={`/movie/${movie.imdbID}`}
                  state={{ movie }}
                >
                  {movie.Title}
                </Link>
              </td>
              <td>{movie.Year}</td>
              <td>{movie.imdbID}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Stack spacing={2} className="pagination-container">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </div>
  );
};

export default MovieInfo;
