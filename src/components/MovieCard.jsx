/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class MovieCard extends Component {
  // eslint-disable-next-line max-lines-per-function
  render() {
    // eslint-disable-next-line react/prop-types
    // eslint-disable-next-line react/destructuring-assignment
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
