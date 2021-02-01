import React from "react";
import MovieCard from "./MovieCard";
import movies from '../data';

class MovieLIst extends React.Component {
  render() {
		return (
			movies.map(movie => <MovieCard key={ movie.title } movie = { movie }/>)
		);
  }
}

export default MovieLIst;
