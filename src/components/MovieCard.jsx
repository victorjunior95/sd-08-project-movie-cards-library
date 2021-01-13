// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movies;

    return (
      <section className="movie-card">
        <img src={ imagePath } className="movie-card-image" alt="filme" />
        <h3 className="movie-card-title">{title}</h3>
        <div className="movie-card-subtitle">{subtitle}</div>
        <div className="movie-card-storyline">{storyline}</div>
        <div className="rating">{rating}</div>
      </section>
    );
  }
}

MovieCard.propType = {
  movies: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.element.isRequired,
  }).isRequired,
};

export default MovieCard;
