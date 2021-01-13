// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import movies from '../data';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    const GenerateList = () => {
      movies.map(movie => <MovieCard key={ movie.title } movie={ movie } />);
    };

    return (
      <div>
        <GenerateList />
      </div>
    );
  }
}
