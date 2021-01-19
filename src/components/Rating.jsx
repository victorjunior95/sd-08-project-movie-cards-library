// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    const {rating} = this.props;
    return <div className="rating">{rating}</div>;
  }
}

export default Rating;

// 4.2 - Renderize a nota de um filme dentro de <Rating />
// <Rating /> deve renderizar a nota do filme recebido na prop rating dentro de um elemento com a classe rating.

// O que será verificado:
// O componente <Rating /> é renderizado dentro de um elemento com a classe rating.