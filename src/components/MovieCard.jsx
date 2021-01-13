// implement MovieCard component here

import React from 'react';
import PropTypes from 'prop-types';

import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie, key } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;

    return (
      <section>
        {console.log(key)}
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <img src={imagePath} alt="imagem do filme" />
        <Rating rating={rating} />
      </section>
    );
  }
}

export default MovieCard;
