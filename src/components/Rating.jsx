// implement Rating component here
import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (

      <h6 className="rating">{rating}</h6>

    );
  }
}

export default Rating;
