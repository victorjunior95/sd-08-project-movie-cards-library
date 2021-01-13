import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const movie = this.props.movie;
    return (
      <section>
        <img src={movie.imagePath} />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
        <Rating rating={ movie.rating } />
      </section>
    );
  }
}

export default MovieCard;
