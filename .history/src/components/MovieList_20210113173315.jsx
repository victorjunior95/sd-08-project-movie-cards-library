import MovieCard from './components/MovieCard';
import React from 'react'

class MovieList extends React.Component {
    render() {
    {cosnt Movies = {this.props.movies}}
        return (
            <div>

                <MovieCard>
                    {Movies.map(movie{} => <MovieList movie.title={key}/>)}
                </MovieCard>
            </div>
        )
    }
}
export default MovieList;