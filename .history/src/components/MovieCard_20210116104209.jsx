// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
render() {
    const {title, subtitle, storyline, imagePath , rating} = this.props.movie;
    return (
        <img src={imagePath} alt="Poster do filme">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
    )
}
}
export default MovieCard;