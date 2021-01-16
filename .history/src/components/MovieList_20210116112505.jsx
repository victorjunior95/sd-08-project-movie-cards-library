import MovieCard from './MovieCard';
import PropTypes from 'prop-types';
import React from 'react'

const movie = [];
class MovieList extends React.Component {
  render() {
  const { movies } = this.props;
    return (
      <div>
          {movies.map((movie) => <MovieCard movie={key}/>)}
      </div>
    )
  }
}
MovieList.propTypes ={ movie : PropTypes.object.isRequired}
export default MovieList;