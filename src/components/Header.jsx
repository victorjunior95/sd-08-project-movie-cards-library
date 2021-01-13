import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { text } = this.props;
    return (
      <header className="movie-card-header">
        <h1 className="page-title">{text}</h1>
      </header>
    );
  }
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
