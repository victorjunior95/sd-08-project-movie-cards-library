import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.map(el => {
          return <MovieCard card={el} />
        })}
      </section>
    );
  }
}

export default MovieList;
