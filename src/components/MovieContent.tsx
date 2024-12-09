import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } from '../redux/movieSlice';
import { RootState } from '../redux/store';
import MovieInfo from './MovieInfo';
import { BlinkBlur } from "react-loading-indicators";
import Alert from '@mui/material/Alert';

const MovieContent: React.FC = () => {
  const dispatch = useDispatch();

  // Access the Redux store data
  const { 
    movies,
    totalResults,
    apiKey, 
    searchByName, 
    searchByYear, 
    isLoading,
    isFailed,
    error
  } = useSelector((state: RootState) => state.movies);

  const filterByType = useSelector((state: RootState) => state.movies.filterByType);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch movies with an API call
  const fetchMovies = async (pageNumber?: number) => {
    dispatch(fetchMoviesStart());
    try {
      let url = "";
      if (pageNumber) {
        url = `http://www.omdbapi.com/?s=${searchByName}&y=${searchByYear}&page=${pageNumber}&type=${filterByType}&plot=full&apikey=${apiKey}`;
        setCurrentPage(pageNumber);
      } else {
        url = `http://www.omdbapi.com/?s=${searchByName}&y=${searchByYear}&type=${filterByType}&plot=full&apikey=${apiKey}`;
        setCurrentPage(1);
      }
      const response = await fetch(url);
      const data = await response.json();
      if (data.Search) {
        dispatch(fetchMoviesSuccess(data));
      } else {
        dispatch(fetchMoviesFailure('No movies found.'));
      }
    } catch (error) {
      dispatch(fetchMoviesFailure('Failed to fetch movies.'));
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [searchByName, searchByYear, filterByType]);

  return (
    <div className="movie-content container">
      {isLoading ? <BlinkBlur color="#32cd32" size="medium" text="Loading Data" textColor="" />
      :
      <>
        {isFailed ? 
          <Alert severity="error">{error}</Alert> 
          :
          <MovieInfo totalResults={totalResults} currentPage={currentPage} onPageChange={fetchMovies} movies={movies} />
        }
      </>
      }
    </div>
  );
};

export default MovieContent;
