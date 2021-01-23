// implement MovieList component here
import React from 'react';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const movie = movies;
    return (
      <div>
        {movie.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
};

export default MovieList;
