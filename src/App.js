import React from 'react';
import './App.css';
import Header from './components/Header';
import { movies } from './data';
import Movielist from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <Movielist movies={Movielist} />
    </div>
  );
}

export default App;
