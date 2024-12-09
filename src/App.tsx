import React from 'react';
import './App.css';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieContent from "./components/MovieContent";
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<MovieContent />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
