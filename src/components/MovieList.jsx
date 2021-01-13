import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <section>
          {movies.map((movie) => <MovieCard key={ movie.title } />)}
        </section>
      </div>
    );
  }
}

export default MovieList;
