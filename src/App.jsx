import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './Components/Header.jsx';
import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import SearchResults from './Components/SearchResults.jsx';
import Facts from './Components/Facts.jsx';
import Footer from './Components/Footer.jsx';

const videoDataDefault ={
  videoId : 'zABLecsR5UE?si=kHrJimQxjlL3Z848',
  artist : 'Lewis Capaldi',
  songName : "Someone You Loved",
  description : 'During his speech at The BRIT Awards 2020, Lewis confirmed that contrary to popular belief, this song is about his grandmother (as opposed to an ex-lover). The music video, starring the former Doctor Who star Peter Capaldi, depicts him as a widower. He is content, but when he meets a young mother and her family, who his wife had donated a heart to, and he gets to listen to her heartbeat again. “Someone You Loved” was Lewis\' first UK number 1 single and spent seven consecutive weeks at the top. It also hit #1 on Scotland and Ireland’s charts.',
  artistDesc : 'Lewis Capaldi (born October 7, 1996) is a singer and songwriter from West Lothian, Scotland. His debut single, “Bruises,” was released on March 31st, 2017, and has since notched up over 25 million plays on Spotify. Capaldi’s debut EP, Bloom, was released on the 20th of October, 2017. It features four tracks, three of which are singles that he had released throughout the year: “Fade,” “Lost On You,” and “Bruises.” Capaldi’s second EP Breach released a year later. It also featured four tracks. His debut album Divinely Uninspired To A Hellish Extent released on the 17th of May, 2019 featuring 12 songs including his singles “Grace,” “Someone You Loved” and “Hold Me While You Wait.” “Someone You Loved” was an international success.',
  lyrics : '<p>[Verse 1]<br> <a href="/9234498/Alan-walker-faded/You-were-the-shadow-to-my-light-did-you-feel-us" data-id="9234498" class="has_comments" data-editorial-state="accepted" data-classification="accepted">You were the shadow to my light<br> Did you feel us?</a><br> <a href="/8550469/Alan-walker-faded/Another-star-you-fade-away" data-id="8550469" class="has_pinned_annotation has_verified_annotation" data-editorial-state="accepted" data-classification="verified">Another star, you fade away</a><br> <a href="/8803010/Alan-walker-faded/Afraid-our-aim-is-out-of-sight-wanna-see-us-alight" data-id="8803010" data-editorial-state="accepted" data-classification="accepted">Afraid our aim is out of sight<br> Wanna see us alight</a><br> <br> [Pre-Chorus 1]<br> <a href="/8774219/Alan-walker-faded/Where-are-you-now-where-are-you-now-where-are-you-now-was-it-all-in-my-fantasy-where-are-you-now-were-you-only-imaginary" data-id="8774219" data-editorial-state="accepted" data-classification="accepted">Where are you now?<br> Where are you now?<br> Where are you now?<br> Was it all in my fantasy?<br> Where are you now?<br> Were you only imaginary?</a><br> <br> [Chorus]<br> <a href="/8803037/Alan-walker-faded/Where-are-you-now-atlantis-under-the-sea-under-the-sea-where-are-you-now-another-dream" data-id="8803037" data-editorial-state="accepted" data-classification="accepted">Where are you now?<br> Atlantis, under the sea, under the sea<br> Where are you now? Another dream</a><br> <a href="/8774227/Alan-walker-faded/The-monsters-running-wild-inside-of-me" data-id="8774227" data-editorial-state="accepted" data-classification="accepted">The monster\'s running wild inside of me</a><br> <a href="/8550463/Alan-walker-faded/Im-faded-im-faded-so-lost-im-faded-im-faded-so-lost-im-faded" data-id="8550463" class="has_comments has_pending_edits has_pinned_annotation has_verified_annotation" data-editorial-state="needs_exegesis" data-classification="verified">I\'m faded, I\'m faded<br> So lost, I\'m faded, I\'m faded<br> So lost, I\'m faded</a><br> <br> [Verse 2]<br> <a href="/8894966/Alan-walker-faded/These-shallow-waters-never-met-what-i-needed-im-letting-go-a-deeper-dive-eternal-silence-of-the-sea-im-breathing-alive" data-id="8894966" data-editorial-state="accepted" data-classification="accepted">These shallow waters never met what I needed<br> I\'m letting go, a deeper dive<br> Eternal silence of the sea<br> I\'m breathing, alive</a><br> <br> [Pre-Chorus 2]<br> <a href="/9066587/Alan-walker-faded/Where-are-you-now-where-are-you-now" data-id="9066587" data-editorial-state="accepted" data-classification="accepted">Where are you now?<br> Where are you now?</a><br> <a href="/8920001/Alan-walker-faded/Under-the-bright-but-faded-lights" data-id="8920001" data-editorial-state="accepted" data-classification="accepted">Under the bright but faded lights</a><br> <a href="/9066597/Alan-walker-faded/You-set-my-heart-on-fire" data-id="9066597" data-editorial-state="accepted" data-classification="accepted">You set my heart on fire</a><br> <a href="/9066587/Alan-walker-faded/Where-are-you-now-where-are-you-now" data-id="9066587" data-editorial-state="accepted" data-classification="accepted">Where are you now?<br> Where are you now?</a><br> <br> [Chorus]<br> <a href="/8803037/Alan-walker-faded/Where-are-you-now-atlantis-under-the-sea-under-the-sea-where-are-you-now-another-dream" data-id="8803037" data-editorial-state="accepted" data-classification="accepted">Where are you now?<br> Atlantis, under the sea, under the sea<br> Where are you now? Another dream</a><br> <a href="/8774227/Alan-walker-faded/The-monsters-running-wild-inside-of-me" data-id="8774227" data-editorial-state="accepted" data-classification="accepted">The monster\'s running wild inside of me</a><br> <a href="/8550463/Alan-walker-faded/Im-faded-im-faded-so-lost-im-faded-im-faded-so-lost-im-faded" data-id="8550463" class="has_comments has_pending_edits has_pinned_annotation has_verified_annotation" data-editorial-state="needs_exegesis" data-classification="verified">I\'m faded, I\'m faded<br> So lost, I\'m faded, I\'m faded<br> So lost, I\'m faded</a></p>'
};

function App() {
  const[results, setResults] = useState([]);
  const[selectedSong, setSelectedSong] = useState(videoDataDefault);

  return (
    <React.Fragment>
      <Header setResults={setResults} />
      
      {results.length == 0 
        ? 
        <><Hero videoData={selectedSong}/><Facts details={selectedSong}/></> 
        :
        <SearchResults results={results} setSelectedSong={setSelectedSong} setResults={setResults}/> 
      }
      
      <About />
      <Footer />
    </React.Fragment>
  );
}

export default App;
