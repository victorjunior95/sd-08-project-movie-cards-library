import React from 'react';

class MovieCard extends React.Component {
  render() {
    const {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
    } = this.props.infoMovie;
    return <h1>{title}</h1>;
  }
}

export default MovieCard;
