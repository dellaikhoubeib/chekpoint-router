import React from 'react';

function MovieCard({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      {/* Additional card details can go here */}
    </div>
  );
}

export default MovieCard;
