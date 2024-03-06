import React from 'react';
import { useEffect, useState } from 'react'
import { GetSearchResult } from './API/APICalls.js';
import YouTubeEmbed from './Components/YouTubeEmbed.jsx';
import './App.css';
import Header from './Components/Header.jsx';
import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import SearchResults from './Components/SearchResults.jsx';
import Facts from './Components/Facts.jsx';
import Footer from './Components/Footer.jsx';

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
      <YouTubeEmbed />
      <SearchResults results={results}/>
      <Facts />
      <About />
      <Footer />
    </React.Fragment>
  );
}

export default App;
