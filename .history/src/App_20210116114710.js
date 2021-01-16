import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
// import Rating from './components/Rating';
import movie from 'data.js'

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;
