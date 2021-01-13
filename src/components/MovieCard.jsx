// implement MovieCard component here
import React from 'react';

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

export default MovieCard;
