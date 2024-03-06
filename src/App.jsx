import React from 'react';
import { useEffect, useState } from 'react'
import { GetSearchResult } from './API/APICalls.js';
import YouTubeEmbed from './Components/YouTubeEmbed.jsx';
import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import SearchResults from './components/SearchResults.jsx';
import Facts from './components/Facts.jsx';
import Footer from './components/Footer.jsx';
import SearchButton from './components/SearchButton.jsx';

function App() {
  const[results, setResults] = useState([]);
  const[showResults, setShowResults] = useState(false);
  useEffect(() => {

    async function loadResults(){
      const res = await GetSearchResult("Beyonce")
      setResults(res);
    }

    loadResults(); 
  },
    []);
  
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <YouTubeEmbed />
      {showResults ? <SearchResults results={results}/> : <SearchButton searchShowResultsFunction={setShowResults} />}
      <Facts />
      <About />
      <Footer />
    </React.Fragment>
  );
}

export default App;
