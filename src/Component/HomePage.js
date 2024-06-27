import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

function HomePage({ movies }) {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
      <Link to="/add">
        <button>Add Movie</button>
      </Link>
    </div>
  );
}

export default HomePage;
