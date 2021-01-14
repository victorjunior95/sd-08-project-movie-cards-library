import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    // const { imagePath, title, subtitle, storyline } = this.props.movie;
    const { movie } = this.props;

    return (
      <section>
        <img src={ movie.imagePath } alt="imagem de capa do filme" />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
        <Rating rating={ rating } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.element.isRequired,
};

export default MovieCard;
