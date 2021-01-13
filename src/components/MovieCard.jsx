import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <p>{rating}</p>
        <img src={ imagePath } alt={ title } />
      </div>
    );
  }
}

MovieCard.defaultProps = {
  movie: {
    title: 'Title',
    subtitle: 'Subtitle',
    storyline: 'Storyline',
    rating: 0,
    imagePath: 'ImagePath',
  },
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

export default MovieCard;
