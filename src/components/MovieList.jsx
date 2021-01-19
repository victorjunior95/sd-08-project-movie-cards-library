import React from 'react';

import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { filmes } = this.props;

    return (
      <section className="movie-list">
        { filmes[0].title }
      </section>
    );
  }
}

MovieList.propTypes = {
  filmes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ),
};
MovieList.defaultProps = {
  filmes: null,
};

export default MovieList;
