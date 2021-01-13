import React from 'react';

import Header from './components/Header';
import data from './data';
import './App.css';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header className="movie-card-header" />
      <MovieList className="movie-list" movies={ data } />
    </div>
  );
}

export default App;
