import React from 'react';
import './App.css';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Import your store
import MovieHeader from './components/MovieHeader';
import MovieContent from './components/MovieContent';
import MovieDetails from './components/MovieDetails';
import MovieFilterBar from './components/MovieFilterBar';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Movie Page Header */}
                  <MovieHeader header="Single Page Movie Application" />
                  {/* Movie Filter Bar */}
                  <MovieFilterBar />
                  {/* Movie Content */}
                  <MovieContent />
                </>
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
