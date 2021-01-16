import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
    render() {            
        return (    
            <div>       
                {movies.map(element => <MovieCard key={ element.title } movie={ element }/>)} 
            </div>                    
        );
    }
}

MovieList.propTypes= {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;