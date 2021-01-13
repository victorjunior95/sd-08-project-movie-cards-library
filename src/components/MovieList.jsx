import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {this.props.movies.map((elem) => <MovieCard key={ elem.title } movie={ elem } />)}
      </div>
    );
  }
}

export default MovieList;
