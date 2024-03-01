/* eslint-disable react/prop-types */

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
