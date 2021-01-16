// implement MovieCard component here
import React from 'react';
import ProtoTypes from 'prop-types';

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

MovieCard.protoTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        storyline: PropTypes.string,
        imagePath: PropTypes.string,
        rating: PropTypes.number,
    })
 }

export default MovieCard;