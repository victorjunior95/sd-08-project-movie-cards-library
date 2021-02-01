import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movie } = this.props;
    return (
      <section>
        { movie.map((element) => (
          <MovieCard key={ element.title } movie={ element } />
        )) }
      </section>
    );
  }
}

MovieList.propTypes = { movie: PropTypes.arrayOf.isRequired };

export default MovieList;
