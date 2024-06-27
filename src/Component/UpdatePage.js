import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdatePage({ movies, addMovie, updateMovie }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const initialState = {
    title: '',
    description: '',
    trailer: ''
  };

  const [movieData, setMovieData] = useState(initialState);

  useEffect(() => {
    if (isEditMode) {
      const movieToEdit = movies.find((m) => m.id === parseInt(id));
      if (movieToEdit) {
        setMovieData(movieToEdit);
      }
    }
  }, [id, isEditMode, movies]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData({
      ...movieData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      updateMovie(movieData);
    } else {
      addMovie(movieData);
    }
    navigate('/');
  };

  return (
    <div>
      <h1>{isEditMode ? 'Update Movie' : 'Add Movie'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={movieData.title} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={movieData.description} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Trailer URL:
          <input type="text" name="trailer" value={movieData.trailer} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">{isEditMode ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
}

export default UpdatePage;
