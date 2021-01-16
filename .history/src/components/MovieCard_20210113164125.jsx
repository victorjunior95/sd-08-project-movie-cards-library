// implement MovieCard component here
import React from 'react';

class MovieCard extends Component {
render() {
    return (<div>
      <h1>{this.props.movie.title}</h1>
    </div>)
    }
}
export default MovieCard;