import React from 'react';

import Headers from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

import './App.css';

function App() {
  return (
    <div className="App">
      <Headers />
      <main>
        <MovieList movies={ movies } />
      </main>
    </div>
  );
}

export default App;
