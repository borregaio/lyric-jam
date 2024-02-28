import React from 'react';

const SearchResults = ({ results }) => {
    return (
      <div>
        <ul>
          {results.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      </div>
    );
  };

export default SearchResults;
