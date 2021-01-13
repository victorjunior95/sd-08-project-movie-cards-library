import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating-section">
        <p className="rating">
          {rating}
        </p>
      </div>

    );
  }
}

export default Rating;
