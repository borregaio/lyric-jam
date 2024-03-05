import blackSmoke from './assets/images/02_black-smoke.png';
import abstractLetters from './assets/images/02_abstract-letters.png';

export default function About() {
  return (
    <div className='flex justify-center h-headerHeight0 sm:h-headerHeight1 relative'>

        <div className='absolute top-0 z-10 bg-custom-gray w-full h-16 flex justify-center items-center'>
            <h1 className='font-poppins font-extrabold text-custom-red text-4xl sm:text-5xl'>LYRIC JAM</h1>
        </div>

        <div className='absolute w-full h-headerHeight0 sm:h-headerHeight1' >
            <img src={blackSmoke} className='w-full h-full object-cover' ></img>
        </div>

        <div className='absolute top-24 sm:top-36 z-10 w-5/6 h-96 flex-auto'>
            <img src={abstractLetters} className='w-full h-full object-cover shadow-lg shadow-black'></img>
        </div>

        <div className='absolute top-32 sm:top-52 bg-custom-gray shadow-lg shadow-black w-3/4 z-20 flex-auto' >
            <div className='font-poppins font-extrabold px-4 sm:px-20 text-custom-pink text-left text-2xl md:text-4xl basis-4/12 flex-auto'>
                <h2 className='mt-5 leading-relaxed'><span className='text-white'>ABOUT</span> US</h2>
            </div>
            <div className='text-white p-8 pt-0 text-justify'>
                <p className='mt-3 mb-3'>Welcome to Lyric Jam, your ultimate destination for music enthusiasts!</p>
                <p className='mt-3 mb-3'>At Lyric Jam, we're passionate about enhancing your music listening experience. Whether you're vibing to your favourite tunes or discovering new tracks, we've got you covered. Our platform offers a unique feature that allows you to listen to music with synchronised lyrics displayed on-screen, bringing you closer to the soul of the song.</p>
                <p className='mt-3 mb-3'>With a user-friendly interface and an extensive library of songs across various genres, Lyric Jam is your go-to destination for a fully immersive music experience. Join our community of music lovers today and embark on a journey where every beat and every word resonates with you.</p>
                <p className='mt-3 mb-3'>Let the music play, and let the stories unfold – only at Lyric Jam</p>
            </div>
        </div>

    </div>
  )
}