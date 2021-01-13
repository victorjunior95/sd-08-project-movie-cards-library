// implement MovieList component here
import React from 'react';

import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((mv, i) => <MovieCard key={ mv.title + i } movie={ mv } />) }
        ;
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieList;
