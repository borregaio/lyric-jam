import React from 'react';

const SearchButton = () => {
    return (
        <div className=''>
            <form>
                <input type='text' className='font-poppins font-extrabold text-center text-2xl placeholder-custom-red border-4 border-custom-red' placeholder='SEARCH ARTIST'></input>
                <button type='submit' className='bg-custom-red '><p className='font-poppins text-custom-red text-2xl border-4 border-custom-red'>******</p></button>
            </form>
        </div>
    );
};

export default SearchButton;