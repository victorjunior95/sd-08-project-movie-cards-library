// implement MovieList component here
import React from 'react';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {

    const { listOfMovies } = this.props.movies;

    return (
      <div>
        { listOfMovies.map((movie) => <MovieCard movie={ movie } />) };
      </div>
    );
  }
}

export default MovieList;
