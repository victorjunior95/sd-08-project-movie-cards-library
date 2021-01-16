// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
render() {
    const {title, subtitle, storyline, imagePath , rating} = this.props.movie;
    return (
      <div>
        <img src={imagePath } alt="Poster do films" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        {/* <Rating /> */ }
      </div>
    )
}
}
export default MovieCard;