// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <section className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movies={ movie } />) }
      </section>
    );
  }
}

MovieList.propType = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
