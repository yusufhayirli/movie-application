import React, { useEffect, useState } from 'react';
import MovieInfo from './MovieInfo';
import MovieFilterBar from "./MovieFilterBar";
import MovieHeader from './MovieHeader';

const OnePageMovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [searchByName, setSearchByName] = useState("Pokemon");
  const [searchByYear, setSearchByYear] = useState("");
  const [filterByType, setFilterByType] = useState("");

  const getListAPI = async (searchByName: string, searchByYear: string, filterByType: string) => {
    const url = `http://www.omdbapi.com/?s=${searchByName}&y=${searchByYear}&type=${filterByType}&plot=full&apikey=2c2300cd`

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
        setMovies(responseJson.Search);
      } else {
      setMovies([]);
    }
  }

  useEffect(() => {
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
        <MovieInfo movies = {movies}/>
      </div>
    </div>
  );
}

export default OnePageMovieApp;
