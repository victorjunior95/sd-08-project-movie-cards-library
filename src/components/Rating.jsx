import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const  { rating } = this.props;
    return (
      <div>
      {rating}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object).isRequired }

export default MovieList;