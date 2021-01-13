import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { infoMovie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = infoMovie;

    return (
      <h1>
        {title}
        {subtitle}
        {storyline}
        {rating}
        {imagePath}
      </h1>
    );
  }
}

MovieCard.propTypes = {
  infoMovie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
