import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movieName;

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

export default MovieCard;
