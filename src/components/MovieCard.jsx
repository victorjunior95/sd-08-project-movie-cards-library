// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
import movies from './MovieList'

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div>
      <img src={imagePath}></img>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
      <Rating rating= {rating}/>
      </div>
    )
  }
}

export default MovieCard;

// 3.1 - Renderize o componente <MovieCard />
// Esse componente representa um cartão de filme. <MovieCard /> deve receber uma prop movie. 
// Essa prop será um objeto, contendo as propriedades, title, subtitle, storyline, imagePath e rating.

// O que será verificado:
// O componente <MovieCard /> é renderizado sem quebrar a aplicação.

// 3.2 - Renderize a imagem do filme dentro de uma tag img
// <MovieCard /> deve renderizar uma tag img, tendo como atributo src o valor da 
// propriedade imagePath do objeto recebido como prop.

// O que será verificado:
// A imagem é renderizada dentro de uma tag img.

// O atributo src da imagem deve ter o valor de imagePath.
// 3.3 - Renderize o título do filme dentro de uma tag h4
// <MovieCard /> deve renderizar o título do filme dentro de uma tag h4. O título está contido na propriedade title do objeto recebido como prop.

// O que será verificado:
// O título do filme é renderizado dentro de uma tag h4.

// 3.4 - Renderize o subtítulo do filme dentro de uma tag h5
// <MovieCard /> deve renderizar o subtítulo do filme dentro de uma tag h5. O subtítulo está contido na propriedade subtitle do objeto recebido como prop.

// O que será verificado:
// O subtítulo do filme é renderizado dentro de uma tag h5.

// 3.5 - Renderize a sinopse do filme dentro de uma tag p
// <MovieCard /> deve renderizar a sinopse do filme dentro de uma tag p. A sinopse está contida na propriedade storyline do objeto recebido como prop.

// O que será verificado:
// A sinopse do filme é renderizada dentro de uma tag p.

// 3.6 - Renderize o componente <Rating /> dentro de <MovieCard />
// <MovieCard /> deve renderizar um componente <Rating />.

// O que será verificado:
// O componente <Rating /> é renderizado pelo <MovieCard />.

// 3.7 - Passe como prop para o componente <Rating /> o atributo rating

// <MovieCard /> deve passar para o componente <Rating /> uma prop chamada rating. O valor dessa prop é a propriedade rating do objeto recebido na prop movie.

// O que será verificado:
// O componente <Rating /> recebe uma prop chamada rating.
// O valor da prop rating é a propriedade rating do filme.