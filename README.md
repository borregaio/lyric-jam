# Lyric Jam

## Overview

This project aims to create a music website for enthusiasts who want to enjoy lyrics and music videos simultaneously. The website offers a clean and intuitive user interface with a prominent search bar, allowing users to search for songs by artist. The search results are displayed in an organized manner, showcasing relevant songs and artists.

![Screenshot](./src/assets/images/screenshot.png)

## Deployment

The deployed version can be accessed [here](https://master--lyricjam.netlify.app/).

## Tech Stack

- **Genius API**: Used to fetch and display videos and lyrics for the selected songs.
- **Tailwind CSS**: Employed for styling and creating a responsive design across various devices.
- **AOS Library**: Integrated for smooth and attractive animations to enhance user experience.

## Features

### User Interface

The website boasts a clean and intuitive user interface, ensuring a seamless experience for music enthusiasts.

### Search Functionality

Users can search for songs using the prominently displayed search bar. The search functionality allows queries by artist. Search results are organized and showcase relevant songs and artists.

### Lyrics Display

Selected song lyrics are displayed on the screen in a readable format. The lyrics synchronize with the song's progression, highlighting the current line being sung. Users can easily navigate through the lyrics, including scrolling up and down.

### Music Video Integration

In addition to lyrics, the website displays the corresponding music video for the selected song, providing a comprehensive multimedia experience.

### Responsive Design

The website is designed to be responsive and compatible with various devices and screen sizes, including desktops, laptops, tablets, and mobile phones. The layout and functionality adapt to different screen sizes without compromising user experience.

## Installation

1. Clone the repository
   ```console
   git clone https://github.com/borregaio/lyric-jam.git
   ```
2. Install dependencies
    ```console
    npm install
    ```
3. Run the application
    ```console
    npm run dev
    ```

## Usage

1. Open the website in your preferred browser.

2. Use the search bar to look for songs by artist.

3. Select a song from the search results to view lyrics and simultaneously watch the music video.

4. Enjoy the multimedia experience!

## Steps Followed

### Create UI Components:
Design and create UI components for the header, videp player, lyrics, search bar, search results, facts, about us and footer.
```javascript
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
      {showResults ? <SearchResults results={results}/> : <SearchButton searchShowResultsFunction={setShowResults} />}
      <Facts />
      <About />
      <Footer />
    </React.Fragment>
  );
}

export default App;
```

### Implement Search Functionality:
Create functions to handle user input, make API requests to fetch song data, and display results.
```javascript
const SearchResults = ({ results }) => {
  return (
    <div>
      {results &&
        <ul role="list" className="bg-custom-gray text-white font-poppins">
          {results.map((song) => (
            <li className="flex items-center gap-x-6 p-7" key={song.name}>
              <div className="w-full">
                <img className="h-36 w-36 shadow-md shadow-black" src={song.cover} alt="" />
              </div>
              <div className="w-full">
                <h4>{song.name}</h4>
              </div>
              <div className="w-full">
                <h4>{song.artist}</h4>
              </div>
              <div className="w-full">
                <h4>{song.year}</h4>
              </div>
              <div className="w-full">
                <button className="text-custom-red border border-custom-red bg-transparent px-6 py-1">SELECT SONG</button>
              </div>
            </li>
          ))}
        </ul>}
    </div>
  );
};

export default SearchResults;
```

### Display Lyrics:
Create a component to display lyrics. Use a library or custom logic to synchronize lyrics with the song progression.
```javascript

```

### Integrate Music Video:
Embed the music video alongside the lyrics using a video player or an API that provides embeddable video content.
```javascript
import React from 'react';

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="youtube-embed-container mx-auto max-w-4xl">
      <iframe
        className="w-full"
        style={{ height: '500px' }}
        src={`https://www.youtube.com/embed/jCOX8dT9q8M?si=FEdGbtf9x7KKWoU-`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
```

### Implement Responsive Design:
Ensure your components and overall layout are responsive. Use media queries and Tailwind to adapt to different screen sizes.
```css
@media only screen and (max-width: 640px){
    /* Hero */
    .red-div,
    .image-div {
      height: 14rem;
      width: 20rem;
    }

    .red-div {
      margin-bottom: 80px;
    }

    .selected-song {
      text-align: center;
    }

    .lyrics {
      padding: 15px;
      text-align: center;
    }
}
```

### Integrate APIs:
Use music and lyrics APIs to fetch song information, lyrics, and video content.
```javascript
export async function GetSearchResult(searchQuery) {
    
    const api = `uODKK-hhq00en1ijK6sQrXwqsdmvOsyZnW4LV9EXv8WL90_H1kTa5mxBJAVZFaq5`;
    const url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${searchQuery}&per_page=20&page=1`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': api,
            'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
    };

    let results = [];
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        results = result.hits.map((res)=>{
            return {
                cover : res.result.header_image_url,
                name : res.result.title,
                artist : res.result.artist_names,
                year : res.result.release_date_for_display
            }
        });

    } catch (error) {
        console.error(error);
    }

    return results;
}
```

### Testing:
Test the application thoroughly to ensure that search, lyrics display, video integration, and responsiveness work as expected.

## Contributors

- Carlos Borrega
- Claire Price
- Desire Anunobi
- Gjorgji Krstevski
- Jessica Pourawal
- Sufyan Gajra