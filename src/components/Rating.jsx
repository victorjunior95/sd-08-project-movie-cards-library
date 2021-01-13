import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { score } = this.props;
    return (
      <section className="rating">
        {score}
      </section>
    );
  }
}

Rating.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Rating;
