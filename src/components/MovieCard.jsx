import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;

    return (
      <section className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt="Cartaz do filme" />
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <span>
          Rating
          {rating}
        </span>
      </section>
    );
  }
}

export default MovieCard;
