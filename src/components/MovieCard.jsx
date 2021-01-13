import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movieName;

    return (
      <div className="movie-card">
        <img src={ imagePath } alt={ title } />
        <p className="movie-title">
          {title}
        </p>
      </div>
    );
  }
}

export default MovieCard;
