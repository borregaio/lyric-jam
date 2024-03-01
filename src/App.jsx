import { useEffect, useState } from 'react'
import './App.css'
import SearchResults from './SearchResults'
import { GetSearchResult } from './API/APICalls.js';


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
    <SearchResults results={results}/>
  )
}

export default App
