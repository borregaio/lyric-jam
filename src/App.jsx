import React from 'react';
import YouTubeEmbed from './Components/YouTubeEmbed';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import SearchResults from './SearchResults';
import Facts from './Facts';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <SearchResults />
      <Facts />
      <About />
    </React.Fragment>
  );
}

export default App;
