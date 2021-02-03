// implement MovieCard component here
// import React from 'react';
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, sotoryline, imagePath, rate } = movie;
    return (
      <div className="movie-card">
        <img src={ imagePath } alt="" />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ sotoryline }</p>
        <Rating rate={ rate } />
      </div>
    );
  }
}

export default MovieCard;
