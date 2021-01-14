import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div className="movie-card">
        <img src={ movie.imagePath } alt={ movie.title } />
        <h4 className="movie-title">
          { movie.title }
        </h4>
        <h5 className="subtitle">
          { movie.subtitle }
        </h5>
        <p className="summary">
          { movie.storyline }
        </p>
        <Rating rating={ movie.rating } />

      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
  }).isRequired,

};

export default MovieCard;
