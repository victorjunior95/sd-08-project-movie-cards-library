// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movie-list">
        {movies.map((card) => <MovieCard key={ card.title } movie={ card } />)}
      </div>
    );
  }
}
export default MovieList;
