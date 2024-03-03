import React from 'react';
import SearchButton from './SearchButton';
import blackSmoke from './assets/images/02_black-smoke.png';
import abstractLetters from './assets/images/02_abstract-letters.png';

const Header = () => {
    return (
        <div className='flex justify-center static'>

            <div className='absolute top-0 z-10 bg-black w-full h-16 flex justify-center items-center'>
                <h1 className='font-poppins font-extrabold text-custom-red text-4xl sm:text-5xl'>LYRIC JAM</h1>
            </div>

            <div className='absolute top-0 z-0 w-full'>
                <img src={blackSmoke} className='object-cover w-full h-screen' style={{ height: 'calc(100vh - 25px)'}}></img>
            </div>

            <div className='absolute top-24 sm:top-36 z-10 w-5/6 h-3/5'>
                <img src={abstractLetters} className='w-full h-full object-cover shadow-lg shadow-black'></img>
            </div>

            <div className='absolute top-32 sm:top-52 bg-black shadow-lg shadow-black w-3/4 h-3/5 z-20 flex justify-center items-center' >
                <div className='sm:w-5/6 sm:h-2/3 flex flex-col bg-white'>
                    <div className='font-poppins font-extrabold p-2 text-custom-pink text-left text-2xl md:text-4xl bg-custom-red'>
                        <h2 className='leading-relaxed'><span className='text-white'>SEARCH</span> FOR AN ARTIST</h2>
                        <h2 className='leading-relaxed'><span className='text-white'>SELECT</span> YOUR SONG</h2>
                        <h2 className='leading-relaxed'><span className='text-white'>VIEW</span> VIDEO / LYRICS / SONGS / FACTS</h2>
                    </div>
                    <div className='items-center'><SearchButton /></div>
                </div>
            </div>

        </div>
    );
};

export default Header;