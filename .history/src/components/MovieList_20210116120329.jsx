import MovieCard from './MovieCard';
import PropTypes from 'prop-types';
import React from 'react'

const movie = [];
class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movies) => <MovieCard movies={key}/>)}
      </div>
    )
  }
}
MovieList.propTypes ={ movie: PropTypes.object.isRequired }
export default MovieList;