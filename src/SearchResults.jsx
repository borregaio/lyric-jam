import React from 'react';

const songs = [
  {
    cover: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Beyonc%C3%A9_-_Break_My_Soul-en.png',
    name: 'BREAK MY SOUL',
    genre: 'Diva House',
    year: '2022'
  },
  {
    cover: 'https://upload.wikimedia.org/wikipedia/en/1/10/Sam_Smith_-_I%27m_Not_Here_to_Make_Friends.jpeg',
    name: 'I\'m Not Here To Make Friends',
    genre: 'Dance-Pop',
    year: '2023'
  },
  {
    cover: 'https://i1.sndcdn.com/artworks-GdpQfS48G2m7-0-t500x500.jpg',
    name: 'SALVAJE',
    genre: 'Latin',
    year: '2023'
  },
]

const SearchResults = ({ results }) => {
  return (
    <div>
      <ul role="list" className="bg-custom-gray text-white font-poppins">
        {songs.map((song) => (
          <li className="lg:flex items-center gap-x-6 p-7" key={song.name}>
            <div className="w-full">
              <img className="album-cover lg:h-36 w-36 shadow-md shadow-black md:inline mb-6" src={song.cover} alt="" />
            </div>
            <div className="w-full">
              <h4>{song.name}</h4>
            </div>
            <div className="w-full">
              <h4>{song.genre}</h4>
            </div>
            <div className="w-full">
              <h4>{song.year}</h4>
            </div>
            <div className="w-full">
              <button className="select-song text-custom-red border border-custom-red bg-transparent px-6 py-1 md:mt-3">SELECT SONG</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
