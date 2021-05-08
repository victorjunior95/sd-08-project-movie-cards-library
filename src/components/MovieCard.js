import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <h1>{movie.title}</h1>
    );
  }
}

export default MovieCard;
