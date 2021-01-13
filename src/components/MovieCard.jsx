import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <section>
        <img src={ this.props.movie.imagePath } alt="movie cover" />
        <h4>{this.props.movie.title}</h4>
      </section>
    );
  }
}

export default MovieCard;
