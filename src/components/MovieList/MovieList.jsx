import React from 'react';
import PropTypes from 'prop-types'; // Adăugați această linie

import MovieItem from '../MovieItem';
import StyledMovieList from './MovieList.Styled';

const MovieList = ({ movies }) => {
  return (
    <StyledMovieList>
      {movies.map(el => {
        return <MovieItem key={el.id} movie={el} />;
      })}
    </StyledMovieList>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MovieList;
