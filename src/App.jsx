import React from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import SearchResults from './SearchResults';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <SearchResults />
      <About />
    </React.Fragment>
  );
}

export default App;