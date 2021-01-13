import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    // console.log(movie);
    return (
      <div>
        {movies.map((film) => (
          <MovieCard key={film.title} movie={film} />
        ))}
      </div>
    );
  }
}

export default MovieList;
