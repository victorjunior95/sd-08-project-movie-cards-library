import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return(
      <main>
        {movies.map(movie => {
          return <MovieCard movie={movie} key={movie.title} />
        })}
      </main>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.array,
};

export default MovieList;
