import React, { useEffect, useState } from 'react';
import MovieInfo from './MovieInfo';
import MovieFilterBar from "./MovieFilterBar";
import MovieHeader from './MovieHeader';
import { BlinkBlur } from "react-loading-indicators";

interface Movie {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
}

const OnePageMovieApp = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchByName, setSearchByName] = useState("Pokemon");
  const [searchByYear, setSearchByYear] = useState("");
  const [filterByType, setFilterByType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getListAPI = async (searchByName: string, searchByYear: string, filterByType: string) => {
    let index = 1;
    let moreResults = true;
    let fetchedMovies: Movie[] = [];

    while (moreResults) {
      const url = `http://www.omdbapi.com/?s=${searchByName}&y=${searchByYear}&type=${filterByType}&plot=full&page=${index}&apikey=2c2300cd`;

      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Search) {
        fetchedMovies = [...fetchedMovies, ...responseJson.Search];
        index++;
      } else {
        moreResults = false;
      }
    }
    setMovies(fetchedMovies);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getListAPI(searchByName, searchByYear, filterByType);
  }, [searchByName, searchByYear, filterByType])

  return (
    <div className="container home-page">
      <MovieHeader header="Single Page Movie Application" />
      <hr />
      <MovieFilterBar 
        searchByName = {searchByName}
        setSearchByName = {setSearchByName}
        searchByYear = {searchByYear}
        setSearchByYear = {setSearchByYear}
        filterByType = {filterByType}
        setFilterByType = {setFilterByType}
      />
      <div className='row'>
        {isLoading ? <p><BlinkBlur color="#32cd32" size="medium" text="Loading Data" textColor="" /></p> : null}
        <MovieInfo movies = {movies}/>
      </div>
    </div>
  );
}

export default OnePageMovieApp;
