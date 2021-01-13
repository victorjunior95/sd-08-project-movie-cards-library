import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <h1> Movie Card </h1>
      <MovieList movies={ data } />
    </div>
  );
}

export default App;
