import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div className='movie-card'>
        <div className='body'>
          <img src={imagePath} alt={`Cover art for ${title}.`} className='cover-art' />
          <h4 className='movie-title'>{title}</h4>
          <h5 className='movie-subtitle'>{subtitle}</h5>
          <p className='movie-storyline'>{storyline}</p>
        </div>
        <div className='movie-rating'>
          <Rating rating={rating} />
        </div>
      </div>

    );
  }
}

export default MovieCard;