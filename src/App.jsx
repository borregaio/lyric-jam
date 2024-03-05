import React from 'react';
import YouTubeEmbed from './Components/YouTubeEmbed';


const App = () => {
  return (
    <div className="app">
      <h1>Embedded YouTube Video</h1>
      <YouTubeEmbed videoId="VIDEO_ID_HERE" />
    </div>
  );
};

export default App;
