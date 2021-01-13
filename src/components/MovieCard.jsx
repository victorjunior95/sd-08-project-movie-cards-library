import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <section>
        <img src={ this.props.movie.imagePath } alt="movie cover" />
      </section>
    );
  }
}

export default MovieCard;
