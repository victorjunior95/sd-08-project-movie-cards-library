import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, subtitle, storyline, rating } = props.movie;
    return (
      <section className="movie-card">
        <section className="movie-card-body">
          <img className="movie-card-image" src={ imagePath } alt="movie cover" />
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <Rating rating={ rating } />
        </section>
      </section>
    );
  }
}

export default MovieCard;
