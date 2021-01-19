// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard'

class MovieList extends React.Component {
  render() {
    const { movies }= this.props;
    return <section>
      {movies.map(movie => <MovieCard key={movie}/>)}
    </section>
  }
}
  export default MovieList;

// 2.2 - Renderize componentes <MovieCard /> dentro de <MovieList />
// <MovieList /> deve renderizar um componente <MovieCard /> para cada objeto contido no array recebido na prop movies.

// O que será verificado:

// O componente <MovieList /> renderiza a quantidade correta de <MovieCard />.
// 2.3 - Passe uma key para cada <MovieCard /> renderizado
// <MovieList /> deve renderizar <MovieCard />s de forma dinâmica. 
// Ou seja, deve utilizar a função map para renderizar uma lista. 
// Cada componente <MovieCard /> deve receber uma prop key com o nome do filme.

// O que será verificado:

// Cada <MovieCard /> renderizado tem como key o título do filme.