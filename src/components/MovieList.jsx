import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className='movie-list'>
        {movies.map(el => {
          return <MovieCard key={el.title} card={el} />
        })}
      </section>
    );
  }
}

export default MovieList;
