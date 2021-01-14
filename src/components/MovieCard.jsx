// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <section>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <img src={ imagePath } alt="" />
        <p>{storyline}</p>
        <span><Rating rating={ rating } /></span>
      </section>
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
