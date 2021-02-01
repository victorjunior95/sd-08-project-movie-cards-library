import React from 'react';

class MovieCard extends React.Component {
	render() {
		return (
			<img src={this.props.movie.imagePath} alt=""/>
    );
  }
}

export default MovieCard;
