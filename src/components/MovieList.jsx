import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        { movies.map((movies) => {
          return <MovieCard key={ movies.title } movie={ movies } />; })}
      </section>
    );
  }
}
MovieList.propTypes = { movies: PropTypes.arrayOf.isRequired };
export default MovieList;
