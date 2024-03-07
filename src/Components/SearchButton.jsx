import React from 'react';

const SearchButton = ({searchShowResultsFunction}) => {
    return (
        <form>
            <input type='text' className='font-poppins font-extrabold text-center text-base sm:text-2xl placeholder-custom-red border-4 border-custom-red w-36 sm:w-60' placeholder='SEARCH ARTIST' />
            <button id='search' onClick={searchShowResultsFunction} type='submit' className='bg-custom-red hover:bg-white'>
                <p className='font-poppins text-custom-red text-base sm:text-2xl border-4 border-custom-red w-12 sm:w-16  hover:text-white'>*</p>
            </button>
        </form>
    );
};

export default SearchButton;
