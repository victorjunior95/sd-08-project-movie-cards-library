import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
    render() {
       const { movie } = this.props;
       return (
           <section>
            <div>
                <img src={ movie.imagePath }></img>
                <h4>{ movie.title }</h4>
                <h5>{ movie.subtitle }</h5>
                <p>{ movie.storyline }</p>
                <Rating rating={ movie.rating }/>
            </div>
           </section>
       );
    }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        imagePath: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        storyline: PropTypes.string.isRequired,
        rating: PropTypes.number,
    }).isRequired,
};

export default MovieCard;