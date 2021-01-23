// implement MovieList component here
import React from 'react';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const movie = movies;
    return (
      <MovieCard movie={ movie[1] } />
    );
  }
};

export default MovieList;
