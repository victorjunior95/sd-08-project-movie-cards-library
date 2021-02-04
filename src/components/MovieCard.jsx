import React from 'react';

class MovieCard extends React.Component{
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movie

    return (
      <section className="movie-card">
          <img className="movie-card-image" src={ imagePath } alt=""></img>
          <div className="movie-card-body">
              <h4 className="movie-card-title">{ title }</h4>
              <h5 className="movie-card-subtitle">{ subtitle }</h5>
              <p className="movie-card-title">{ storyline }</p>
          </div>
      </section>
    )
  }
}

export default MovieCard;
