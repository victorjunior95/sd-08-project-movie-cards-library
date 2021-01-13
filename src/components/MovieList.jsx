import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((elem) => <MovieCard key={ elem.title } movie={ elem } />)}
      </div>
    );
  }
}
MovieList.propTypes = {
  movies: PropTypes.objectOf.isRequired,
};
export default MovieList;
