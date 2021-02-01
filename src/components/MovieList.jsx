import React, { Component } from "react";
import MovieCard from "./MovieCard";

class MovieLIst extends Component {
  render() {
	  const movies = this.props.movie;
    return movies.map((movie) => <MovieCard key={movie.title} movie={movie} />);
  }
}

export default MovieLIst;
