import React from 'react';
import './App.css';

import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList name='sahdsi'/>
    </div>
  );
}

export default App;
