import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    const movies = this.props.movies;
    return movies.map((movie, index) => {
      return movie + index;
    });
  }
}

export default MovieList;
