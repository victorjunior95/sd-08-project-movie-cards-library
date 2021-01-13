// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieList extends React.Component {
  render() {
    const {
      movie: { title, subtitle, storyline, imagePath, rating },
    } = this.props;

    return (
      <div>
        <img src={ imagePath } alt={ `${title} banner` } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieList;
