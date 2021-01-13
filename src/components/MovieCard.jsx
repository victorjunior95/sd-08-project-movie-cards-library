import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { imagePath, title, subtitle, storyline } = this.props.movie;
    // const { movie } = this.props;

    return (
      <section>
        <img src={ imagePath } alt="imagem de capa do filme" />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        {/* <Rating rating={rating} /> */}
      </section>
    );
  }
}

MovieCard.propTypes = {
  imagePath: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
};

export default MovieCard;
