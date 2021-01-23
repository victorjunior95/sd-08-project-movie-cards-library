// implement MovieList component here
import React from 'react';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const movie = movies;
    return (
      <div>
        {movie.map((item) => <MovieCard key={ item.title } movie={ item } />)}
      </div>
    );
  }
};

export default MovieList;
