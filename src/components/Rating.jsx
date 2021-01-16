// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <section className="rating">
        <h5>{rating}</h5>
      </section>);
  }
}

export default Rating;
