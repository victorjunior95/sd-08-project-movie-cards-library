import MovieCard from './MovieCard';
import ProtoType from 'prop-type';
import React from 'react'

const movie = [];
class MovieList extends React.Component {
  render() {
  const { movies } = this.props;
    return (
      <div>
          {movies.map((movie) => <MovieList movie={key}/>)}
      </div>
    )
  }
}
MovieList.prototype ={ movie : PropTypes.object.isRequired}
export default MovieList;