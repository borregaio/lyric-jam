import { GetSongDetails } from './../API/APICalls';

const SearchResults = ({ results, setSelectedSong, setResults, setShowLoad }) => {

  const handleClick = async (e, id) =>{
    e.preventDefault();

    setShowLoad(true);

    const res = await GetSongDetails(id);

    setSelectedSong(res);
    setResults([]);
    setShowLoad(false);
    
  };
  // md:px-0 md:py-0 lg:px-60 lg:py-28
  return (
    <div className='bg-white flex justify-center lg:py-28'>
    <div className='lg:w-3/4  shadow-lg shadow-black'>
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
                <button onClick={(e) => handleClick(e, song.id)} 
                  className="text-custom-red border border-custom-red bg-transparent px-6 py-1">
                  SELECT SONG
                </button>
              </div>
            </li>
          ))}
        </ul>}
    </div>
    </div>
  );
};

export default SearchResults;
