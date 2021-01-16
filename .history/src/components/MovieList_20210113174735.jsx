import MovieCard from './components/MovieCard';
import React from 'react'

const movie = [];
class MovieList extends React.Component {
  render() {

    return (
      <div>

        <MovieCard>
          {movie.map(movie => <MovieList movie={key}/>)}
        </MovieCard>
      </div>
    )
  }
}
export default MovieList;