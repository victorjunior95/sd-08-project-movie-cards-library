import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <section className="rating">
        { rating }
      </section>
    );
  }
}

Rating.protoTypes = {
  rating: PropTypes.number,
}.isRequired;

Rating.defaultProps = {
  rating: 5,
};

export default Rating;
