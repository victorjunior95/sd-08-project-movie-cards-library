import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div>
        <h3>{ title }</h3>
        <p>{ subtitle }</p>
        <p>{ storyline }</p>
        <p>{ rating }</p>
        <img src={ imagePath } alt={ title } />
      </div>
    );
  }
}

export default MovieCard;
