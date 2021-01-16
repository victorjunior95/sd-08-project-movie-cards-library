// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
render() {
    return (<div>
      <h1>{this.props.movie}</h1>
    </div>)
    }
}
export default MovieCard;