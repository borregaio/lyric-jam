import React from 'react';
import blackSmoke from './assets/images/02_black-smoke.png';
import abstractLetters from './assets/images/02_abstract-letters.png';

const Header = () => {
    return (
        <div>

            <div>
                <img src={blackSmoke} className=''></img>
            </div>

            <div>
                <img src={abstractLetters} className='shadow-md shadow-black'></img>
            </div>

            <div className='bg-black'>
                <div>
                    <div className='font-poppins text-4xl text-custom-pink text-left font-extrabold'>
                        <h2><span className='text-white'>SEARCH</span> FOR AN ARTIST</h2>
                        <h2><span className='text-white'>SELECT</span> YOUR SONG</h2>
                        <h2><span className='text-white'>VIEW</span> VIDEO / LYRICS / SONGS / FACTS</h2>
                    </div>
                    <form>
                        <input type='text' className='font-poppins text-center text-2xl font-extrabold placeholder-custom-red border-4 border-custom-red' placeholder='SEARCH ARTIST'></input>
                        <button type='submit' className='bg-custom-red border-4 border-custom-red'><p className='text-custom-red text-2xl'>******</p></button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Header;