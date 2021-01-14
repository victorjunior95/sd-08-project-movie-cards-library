// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section className="movie-list">
        { movie.map((movies) => <MovieCard movies={ movies } key={ movies.title } />)}
      </section>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.objectOf.isRequired,
};

export default MovieList;
