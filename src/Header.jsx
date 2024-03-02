import React from 'react';
import SearchButton from './SearchButton';
import blackSmoke from './assets/images/02_black-smoke.png';
import abstractLetters from './assets/images/02_abstract-letters.png';

const Header = () => {
    return (
        <div className='flex justify-center static'>

            <div className='absolute top-0 z-10 bg-black w-full h-16 flex justify-center items-center'>
                <h1 className='font-poppins font-extrabold text-5xl text-custom-red'>LYRIC JAM</h1>
            </div>

            <div className='absolute top-0 z-0 w-full'>
                <img src={blackSmoke} className='object-cover w-full h-screen' style={{ height: 'calc(100vh - 25px)'}}></img>
            </div>

            <div className='absolute top-32 z-10 w-5/6 h-96'>
                <img src={abstractLetters} className='w-full h-full object-cover shadow-lg shadow-black'></img>
            </div>

            <div className='absolute top-48 bg-black shadow-lg shadow-black w-3/4 h-96 z-20'>
                <div>
                    <div className='font-poppins text-4xl text-custom-pink text-left font-extrabold'>
                        <h2><span className='text-white'>SEARCH</span> FOR AN ARTIST</h2>
                        <h2><span className='text-white'>SELECT</span> YOUR SONG</h2>
                        <h2><span className='text-white'>VIEW</span> VIDEO / LYRICS / SONGS / FACTS</h2>
                    </div>
                    <SearchButton />
                </div>
            </div>

            
        </div>
            

        
    );
};

export default Header;