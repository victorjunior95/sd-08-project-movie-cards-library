// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movies: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div>
        <h4>{ title }</h4>
        <img src={ imagePath } alt="teste" />
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
