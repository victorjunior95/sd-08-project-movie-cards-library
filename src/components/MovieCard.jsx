import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class Moviecard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;

    return (
      <main>
        <section className="">
          <img src={ imagePath } alt="Movie Poster" />
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
          {/* <Rating rating={ rating } /> */}
        </section>
      </main>
    );
  }
}

Moviecard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default Moviecard;
