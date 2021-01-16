import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
        <div>
          <img src={ imagePath }></img>
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
          <Rating rating={ movie.rating } />
        </div>
    );
  }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        imagePath: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        storyline: PropTypes.string.isRequired,
        rating: PropTypes.number,
    }).isRequired,
};

export default MovieCard;