import { Component } from 'react';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return movies.map((element) => element.title);
  }
}
MovieList.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieList;
