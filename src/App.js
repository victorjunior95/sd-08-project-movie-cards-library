import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movie from './data';
import PropTypes from 'prop-types';


function App() {
  return (
    <div>
      <Header />
      <MovieList movies={ movie } />
    </div>
  );
}

App.propTypes = {
  movie: PropTypes.object
}

export default App;
