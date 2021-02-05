/* eslint-disable react/prop-types */
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { movies } = this.props;

    return (
      <section className="movie-list">
        {movies.map((each) => <MovieCard className="movie-card" key={ each.title } movie={ each } />)}
      </section>
    );
  }
}

export default MovieList;
