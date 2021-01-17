import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        { movies.map((currentMovie) => (
          <MovieCard key={ currentMovie.title } movie={ currentMovie } />
        ))}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: String,
    subtitle: String,
    storyline: String,
    rating: Number,
    imagePath: String,
  })),
};

MovieList.defaultProps = {
  movies: [1, 2],
};

export default MovieList;
