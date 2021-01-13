import React from 'react';

import Trybeflix from '../images/TRYBEFLIX.png';

export default class Logo extends React.Component {
  render() {
    return <img src={ Trybeflix } alt="Logo TrybeFlix" className="header-logo" />;
  }
}
