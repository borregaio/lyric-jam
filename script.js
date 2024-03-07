import React from 'react';
import ReactDOM from 'react-dom';
import SearchResults from './src/components/SearchResults.jsx';

function displayResults() {
    var searchButton = document.getElementById('search');

    searchButton.onclick = function() {
        console.log('It works');
        ReactDOM.render(<SearchResults />, document.getElementById('root'));
    };
}

export { displayResults };


