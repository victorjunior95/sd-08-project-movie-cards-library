import React from 'react';
import MovieCard from './MovieCard';

class MovieLIst extends React.Component {
	render () {
		return (
			<MovieCard movies = {this.props.movies} />
		);
  }
}