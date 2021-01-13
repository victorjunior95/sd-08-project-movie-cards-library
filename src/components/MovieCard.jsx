// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movie;
    return (
      <div>
        <img src={ imagePath } alt="teste" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        {/* <Rating rating={ rating} /> */}
      </div>
    );
  }
}

export default MovieCard;
