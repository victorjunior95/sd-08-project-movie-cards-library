import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;

    return (
      <section>
        <img src={ imagePath } alt="Cartaz do filme" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <span>
          Rating
          {rating}
        </span>
      </section>
    );
  }
}

export default MovieCard;
