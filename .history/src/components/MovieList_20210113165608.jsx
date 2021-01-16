import MovieCard from './components/MovieCard';
import React from 'react'

class MovieList extends React.Component {
    render() {
        return (
            <MovieCard>
                {{this.props.movies}.map(movie{} => <MovieList movie.title={key}/>)}
            </MovieCard>
        )
    }
}
export default MovieList;