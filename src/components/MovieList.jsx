// implement MovieList component here
import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        { movies.map((movie) => <MovieCard key={ movie.title } movieq={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
