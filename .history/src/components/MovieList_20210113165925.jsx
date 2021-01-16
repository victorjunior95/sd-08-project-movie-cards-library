import MovieCard from './components/MovieCard';
import React from 'react'

class MovieList extends React.Component {
    render() {

        return (
            {cosnt Movies = {this.props.movies}}
            <MovieCard>
                {Movies.map(movie{} => <MovieList movie.title={key}/>)}
            </MovieCard>
        )
    }
}
export default MovieList;