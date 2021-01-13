import React from 'react';
import Moviecard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        {movies.map((movie) => <Moviecard key={ movie.title } movie={ movie } />)}
      </section>
    );
  }
}


export default MovieList;
