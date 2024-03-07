import blackSmoke from '../assets/images/02_black-smoke.png';
import abstractLetters from '../assets/images/02_abstract-letters.png';

export default function About() {
    return (
        <div className='flex justify-center h-height2 sm:h-height1 mb-36 sm:mb-20 md:mb-0 relative '>

            <div className='absolute w-full h-height2 sm:h-height1' >
                <img src={blackSmoke} className='w-full h-full object-cover' ></img>
            </div>

            <div className='absolute top-16 sm:top-20 md:top-32 z-10 w-5/6 h-height2 sm:h-height0 md:h-96 flex-auto'>
                <img src={abstractLetters} className='w-full h-full object-cover shadow-lg shadow-black'></img>
            </div>

            <div className='absolute top-24 sm:top-36 md:top-48 bg-custom-gray shadow-lg shadow-black w-3/4 h-height2 sm:h-height0 md:h-96 z-20 flex-auto' >
                <div className='font-poppins font-extrabold text-white p-8 pt-0 text-left text-2xl'>
                    <h2 className='mt-5 leading-relaxed'>ABOUT US</h2>
                </div>
                <div className='text-white p-8 pt-0 text-justify text-sm sm:text-base'>
                    <p className='mt-0 mb-3'>Welcome to Lyric Jam, your ultimate destination for music enthusiasts!</p>
                    <p className='mt-0 mb-3'>At Lyric Jam, we're passionate about enhancing your music listening experience. Whether you're vibing to your favourite tunes or discovering new tracks, we've got you covered. Our platform offers a unique feature that allows you to listen to music with synchronised lyrics displayed on-screen, bringing you closer to the soul of the song.</p>
                    <p className='mt-0 mb-3'>With a user-friendly interface and an extensive library of songs across various genres, Lyric Jam is your go-to destination for a fully immersive music experience. Join our community of music lovers today and embark on a journey where every beat and every word resonates with you.</p>
                </div>
            </div>
        </div>
    )
}