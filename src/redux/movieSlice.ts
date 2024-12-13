import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure of the state
interface SearchResults {
    totalResults: number;
    Search: Movie[];
}

interface Movie {
    Poster: string;
    Title: string;
    Year: string;
    imdbID: string;
}

interface MovieState {
    movies: Movie[];
    apiKey: string;
    isLoading: boolean;
    error: string | null;
    searchByName: string;
    searchByYear: string;
    filterByType: string;
    isFailed: boolean;
    totalResults: number;
}

// Define the initial state
const initialState: MovieState = {
    movies: [],
    totalResults: 0,
    apiKey: '2c2300cd', // add your own api key in case if it is expired.
    isLoading: false,
    error: null,
    searchByName: 'Pokemon',
    searchByYear: '',
    filterByType: '',
    isFailed: false
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
    // Action for starting a movie fetch
    fetchMoviesStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    // Action for successfully fetching movies
    fetchMoviesSuccess: (state, action: PayloadAction<SearchResults>) => {
        state.isFailed = false;
        state.isLoading = false;
        state.totalResults = action.payload.totalResults;
        state.movies = action.payload.Search;
    },
    // Action for failing to fetch movies
    fetchMoviesFailure: (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
        state.movies = [];
        state.totalResults = 0;
        state.isFailed = true;
    },
    // Action for updating the searchByName field
    setSearchByName: (state, action: PayloadAction<string>) => {
        state.searchByName = action.payload;
    },
    // Action for updating the searchByYear field
    setSearchByYear: (state, action: PayloadAction<string>) => {
        state.searchByYear = action.payload;
    },
    // Action for updating the filterByType field
    setFilterByType: (state, action: PayloadAction<string>) => {
        state.filterByType = action.payload;
    }
  },
});

// Export actions
export const {
    fetchMoviesStart,
    fetchMoviesSuccess,
    fetchMoviesFailure,
    setSearchByName,
    setSearchByYear,
    setFilterByType,
} = movieSlice.actions;

// Export reducer to be used in store
export default movieSlice.reducer;
