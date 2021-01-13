import React from 'react';
import movies from './data'
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movie={movies}/>
      Hora de codar! 🚀✍️👨‍💻👩‍💻💪
    </div>
  );
}

export default App;
