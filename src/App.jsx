import React from 'react';
import { useEffect, useState } from 'react'
import { GetSearchResult } from './API/APICalls.js';
import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import SearchResults from './components/SearchResults.jsx';
import Facts from './components/Facts.jsx';
import Footer from './components/Footer.jsx';

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
      <Footer />
    </React.Fragment>
  );
}

export default App;
