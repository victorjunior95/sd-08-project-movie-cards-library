import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;

    return (
      <div className="movie-card">
        <img src={ imagePath } alt={ title } />
        <h4 className="movie-title">
          {title}
        </h4>
        <h5 className="subtitle">
          {subtitle}
        </h5>
        <p className="summary">
          {storyline}
        </p>
        <Rating rating={ rating } />

      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyLine: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,

};

export default MovieCard;
