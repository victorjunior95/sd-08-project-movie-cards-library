// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const [movie] = this.props;
    return (
      <MovieCard />
    );
  }
}

export default MovieList;
