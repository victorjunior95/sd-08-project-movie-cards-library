// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import movies from '../data';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    return (
      <div>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}
