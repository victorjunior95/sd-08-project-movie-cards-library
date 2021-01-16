import MovieCard from './MovieCard';
import PropTypes from 'prop-types';
import React from 'react'

class MovieList extends React.Component {
  render() {
    const { movies }  = this.props.movies;
    return (
      <div>
        {movies.map((movies) => <MovieCard key={movies.titils} movies={{}}/>)}
      </div>
    )
  }
}

MovieList.propTypes ={ movie: PropTypes.object.isRequired }
export default MovieList;