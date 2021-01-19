import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { nota } = this.props;

    return(
      <p>{ nota }</p>
    );
  }
}

export default Rating;