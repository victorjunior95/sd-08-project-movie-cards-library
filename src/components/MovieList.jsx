import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
