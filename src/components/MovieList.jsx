import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map(el => {
          return <MovieCard key={el.title} card={el} />
        })}
      </div>
    );
  }
}

export default MovieList;
