import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import SearchButton from './SearchButton';
import blackSmoke from '../assets/images/02_black-smoke.png';
import abstractLetters from '../assets/images/02_abstract-letters.png';


const Header = ({setResults}) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='flex justify-center h-height0 sm:h-height1 relative'>

            {/* Header */}
            <div className='absolute top-0 z-10 bg-black w-full h-16 flex justify-center items-center'>
                <h1 className='font-poppins font-extrabold text-custom-red text-4xl sm:text-5xl'>LYRIC JAM</h1>
            </div>

            {/* Background image */}
            <div className='absolute w-full h-height0 sm:h-height1' >
                <img src={blackSmoke} className='w-full h-full object-cover' ></img>
            </div>


            {/* Background image two */}
            <div data-aos="fade-left"
                data-aos-delay="100"
                data-aos-easing="ease-in-sine"
                className='absolute top-24 sm:top-36 z-10 w-5/6 h-96'>
                <img src={abstractLetters} className='w-full h-full object-cover shadow-lg shadow-black'></img>
            </div>

            {/* Container for instructions and search button */}
            <div data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className='absolute top-32 sm:top-52 bg-black shadow-lg shadow-black w-3/4 h-96 z-20' >
                <div className='w-full h-full flex flex-col'>
                    <div className='basis-2/12'></div>
                    <div className='font-poppins font-extrabold px-4 sm:px-20 text-custom-pink text-left text-2xl md:text-4xl basis-4/12'>
                        <h2 className=' leading-relaxed'><span className='text-white'>SEARCH</span> FOR AN ARTIST</h2>
                        <h2 className='leading-relaxed'><span className='text-white'>SELECT</span> YOUR SONG</h2>
                        <h2 className='leading-relaxed'><span className='text-white'>VIEW</span> VIDEO / LYRICS / SONGS / FACTS</h2>
                    </div>
                    <div className='basis-2/12'></div>
                    <div className='basis-1/12 flex justify-center items-center'>
                        <SearchButton setResults={setResults} />
                    </div>
                    <div className='basis-2/12'></div>
                </div>
            </div>

        </div>
    );
};

export default Header;