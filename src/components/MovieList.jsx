import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    return (
      <section>
          {movies.map((element) => <MovieCard key={ element.title } movie={ element } />)};
      </section>
      );
  }
}

MovieList.propTypes= {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;