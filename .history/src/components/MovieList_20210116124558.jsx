import MovieCard from './MovieCard';
import PropTypes from 'prop-types';
import React from 'react'

class MovieList extends React.Component {
  render() {
    const { movies }  = this.props.movies;
    return (
      <section className="movie-list">
        {movies.map((movie , key) => <MovieCard key={movie.title} movie={movies}/>)}
      </section>
    )
  }
}

MovieList.propTypes ={ movie: PropTypes.object.isRequired }
export default MovieList;