import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends Component {
  // eslint-disable-next-line max-lines-per-function
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movies;
    return (
      <section>
        <img src={ imagePath } alt="Imagem do Filme" />
        <h4>
          title:
          {title}
        </h4>
        <h5>
          subtitle:
          {subtitle}
        </h5>
        <p>
          storyline:
          {storyline}
        </p>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};
