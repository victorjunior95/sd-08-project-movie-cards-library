// implement MovieList component here
import React from 'react';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        { this.props.movies.map((movie, i) => <MovieCard key={ movie + i } movie={ movie } />) };
      </div>
    );
  }
}

export default MovieList;
