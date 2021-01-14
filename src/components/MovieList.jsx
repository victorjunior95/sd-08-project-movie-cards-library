// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <section className="movie-list">
        {/* <MovieCard /> */}
        {movies.map(movie => <MovieCard key={movie.title} movie={movie} />)}
      </section>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.array,
};

export default MovieList;
