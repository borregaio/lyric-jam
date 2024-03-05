import React from 'react';
import { useEffect, useState } from 'react'
import { GetSearchResult } from './API/APICalls.js';
import YouTubeEmbed from './Components/YouTubeEmbed';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import SearchResults from './SearchResults';
import Facts from './Facts';

function App() {
  const[results, setResults] = useState([]);
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
      <SearchResults results={results}/>
      <Facts />
      <About />
    </React.Fragment>
  );
}

export default App;
