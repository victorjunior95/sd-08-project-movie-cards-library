import MovieCard from './MovieCard';
import PropTypes from 'prop-types';
import React from 'react'

const movie = [];
class MovieList extends React.Component {
  render() {
    const { movie }  = this.props.movies;
    return (
      <div>
        {movies.map((movies) => <MovieCard movies={movies}/>)}
      </div>
    )
  }
}

MovieList.propTypes ={ movie: PropTypes.object.isRequired }
export default MovieList;