import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <span className="rating">{ rating }</span>
    );
  }
}
Rating.defaultProps = {
  rating,
};

Rating.propTypes = {
  rating: PropTypes.number,
};
export default Rating;
