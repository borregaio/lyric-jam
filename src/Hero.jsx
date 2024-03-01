import React from 'react';

const Hero = () => {
    return (
        <div className='h-screen'>
            <div className='font-poppins text-4xl font-extrabold text-left mt-20 ml-10'>
                <h1>BEYONCE</h1>
                <h2>TEXAS HOLD 'EM</h2>
            </div>

            <div className='flex'>
                <div className='w-1/2'>
                    <div className='red-div bg-custom-red shadow-md shadow-black'></div>
                    <div className='image-div bg-black shadow-md shadow-black'></div>
                </div>
                <div className='lyrics w-1/2 px-20 text-left'>
                    <p>This ain't Texas (woo), ain't no hold 'em (hey)</p>
                    <p>So lay your cards down, down, down, down</p>
                    <p>So park your Lexus (woo) and throw your keys up (hey)</p>
                    <p>Stick around, 'round, 'round, 'round, 'round (stick around)</p>
                    <p>And I'll be damned if I can't slow dance with you</p>
                    <p>Come pour some sugar on me, honey too</p>
                    <p>It's a real life boogie and a real life hoedown</p>
                    <p>Don't be a bitch, come take it to the floor now, woo, huh (woo)</p>
                </div>
            </div>
        </div>

    );
};

export default Hero;
