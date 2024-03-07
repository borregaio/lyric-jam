import { useState } from 'react';
import { GetSearchResult } from './../API/APICalls';

const SearchButton = ({ setResults }) => {
    const [userSearchInput, setUserSearchInput] = useState('');

    const loadResults = async (e) => {
        e.preventDefault();

        const res = await GetSearchResult(userSearchInput);
        setResults(res);
        setUserSearchInput('');
    };

    const handleChange = (e) =>{
        setUserSearchInput(e.target.value);
    };

    return (
        <form>
            <input type='text'
                className='font-poppins font-extrabold text-center text-base sm:text-2xl placeholder-custom-red border-4 border-custom-red w-36 sm:w-60'
                placeholder='SEARCH'
                value={userSearchInput} onChange={handleChange} />

            <button id='search' onClick={loadResults} type='submit' className='bg-custom-red hover:bg-white'>
                <p className='font-poppins text-custom-red text-base sm:text-2xl border-4 border-custom-red w-12 sm:w-16  hover:text-white'>*</p>
            </button>
        </form>
    );
};

export default SearchButton;
