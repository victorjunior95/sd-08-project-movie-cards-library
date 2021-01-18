import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;

    return (
      <div className="rating">
        <h1>
          { rating }
        </h1>
      </div>
    );
  }
}
export default Rating;
