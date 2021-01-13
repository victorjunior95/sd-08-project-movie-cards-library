// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        {movie.map((eachMovie) => {
          return <MovieCard key={ eachMovie.title } movie={ eachMovie } />;
        })}
      </div>
    );
  }
}
