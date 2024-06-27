import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/NavBar';
import HomePage from './Component/HomePage'
import MovieDetail from './Component/MovieDetail';
import UpdatePage from './Component/UpdatePage';

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Movie 1', description: 'Description for Movie 1', trailer: 'https://www.youtube.com/embed/some-trailer-1' },
    { id: 2, title: 'Movie 2', description: 'Description for Movie 2', trailer: 'https://www.youtube.com/embed/some-trailer-2' },
  ]);

  const addMovie = (newMovie) => {
    setMovies([...movies, { id: movies.length + 1, ...newMovie }]);
  };

  const updateMovie = (updatedMovie) => {
    setMovies(movies.map(movie => (movie.id === updatedMovie.id ? updatedMovie : movie)));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
          <Route path="/update/:id" element={<UpdatePage movies={movies} updateMovie={updateMovie} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
