import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <section>
        <img src={ this.props.movie.imagePath } alt="movie cover" />
        <h4>{this.props.movie.title}</h4>
        <h5>{this.props.movie.subtitle}</h5>
      </section>
    );
  }
}

export default MovieCard;
