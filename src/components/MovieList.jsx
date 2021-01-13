// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        { movies.map((movie, index) => <MovieCard card={ movie } key={ index } />)}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.objectOf.isRequired,
};

export default MovieList;
