import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section className="movie-list">
        { movie.map((obj) => <MovieCard movie={ obj } key={ obj.title } />) }
      </section>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
