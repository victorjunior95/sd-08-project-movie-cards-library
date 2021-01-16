import MovieCard from './components/MovieCard';
import React from 'react'

class MovieList extends React.Component {
    render() {
        cosnt Movies = {this.props.movies};
        return (
            <MovieCard>
                {Movies.map(movie{} => <MovieList movie.title={key}/>)}
            </MovieCard>
        )
    }
}
export default MovieList;