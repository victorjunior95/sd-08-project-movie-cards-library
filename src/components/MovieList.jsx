import React from 'react';

class MovieList extends React.Component {
  render() {
    const { movie } = this.props;
    // console.log(movie);
    return (
      <div>
        {movie.map((film, index) => (
          <MovieCard key={index} movie={film}/>
        ))}
      </div>
    );
  }
}

export default MovieList;