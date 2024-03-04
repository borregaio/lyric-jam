import React from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import SearchResults from './SearchResults';
import Facts from './Facts';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <SearchResults />
      <Facts />
    </React.Fragment>
  );
}

export default App;