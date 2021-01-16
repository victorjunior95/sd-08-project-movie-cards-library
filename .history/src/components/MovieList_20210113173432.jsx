import MovieCard from './components/MovieCard';
import React from 'react'

cosnt movies = [];
class MovieList extends React.Component {
    render() {

        return (
            <div>

                <MovieCard>
                    {movies.map(movie{} => <MovieList movie.title={key}/>)}
                </MovieCard>
            </div>
        )
    }
}
export default MovieList;