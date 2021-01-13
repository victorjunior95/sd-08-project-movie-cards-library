import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
    render() {
       const { movies } = this.props;
        return (
            <section>
                {movies.map(element => {
                    return <MovieCard mov={ element } key={ element.title } />
                })}
            </section>           
        )       
    }
}

export default MovieList;