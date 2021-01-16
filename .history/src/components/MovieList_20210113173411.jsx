import MovieCard from './components/MovieCard';
import React from 'react'

cosnt Movies = [];
class MovieList extends React.Component {
    render() {

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