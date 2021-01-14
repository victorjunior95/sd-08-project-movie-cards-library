import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    // const rating = this.props.rating.toString();
    const ratingString = rating.toString();
    // console.log(typeof ratingString);

    return (<span> { ratingString } </span>);
  }
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
