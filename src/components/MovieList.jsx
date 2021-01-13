import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section className="movie-list">
        {movie.map((movie) => (
          <MovieCard movie={ movie } key={ movie.title } />
        ))}
      </section>
    );
  }
}

export default MovieList;
