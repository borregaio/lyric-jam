import React from 'react';
import YouTubeEmbed from './YouTubeEmbed';

const Hero = () => {
    return (
        <div>
            <div className='selected-song font-poppins text-4xl font-extrabold xl:text-left mt-5 xl:ml-12 lg:text-center md:text-center sm:text-center'>
                <h1>BEYONCE</h1>
                <h2>TEXAS HOLD 'EM</h2>
            </div>

            <div className='grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
                <div>
                    <div className='red-div bg-custom-red shadow-md shadow-black relative mx-auto mt-10 md:mb-10'>
                        <div className='image-div bg-black shadow-md shadow-black relative top-10 left-7'><YouTubeEmbed /></div>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-easing="ease-in-sine"
                    className='lyrics font-poppins xl: mt-10 xl:p-10 lg:p-10 md:p-10 text-left lg:text-center md:text-center sm:p-20 sm:text-center shadow-black h-40 lg:h-72 overflow-hidden hover:overflow-auto'>
                    <p>This ain't Texas (woo), ain't no hold 'em (hey)</p>
                    <p>So lay your cards down, down, down, down</p>
                    <p>So park your Lexus (woo) and throw your keys up (hey)</p>
                    <p>Stick around, 'round, 'round, 'round, 'round (stick around)</p>
                    <p>And I'll be damned if I can't slow dance with you</p>
                    <p>Come pour some sugar on me, honey too</p>
                    <p>It's a real life boogie and a real life hoedown</p>
                    <p>Don't be a bitch, come take it to the floor now, woo, huh (woo)</p>
                    <p>There's a tornado (there's a tornado) in my city (in my city)</p>
                    <p>In the basement (in the basement), that shit ain't pretty (shit ain't pretty)</p>
                    <p>Rugged whiskey (rugged whiskey) 'cause we survivin' ('cause we survivin')</p>
                    <p>Off red cup kisses, sweet redemption, passin' time, yeah</p>
                    <p>Ooh, one step to the right</p>
                    <p>We headin' to the dive bar we always thought was nice</p>
                    <p>Ooh, run me to the left</p>
                    <p>Then spin me in the middle, boy, I can't read your mind</p>
                    <p>This ain't Texas (woo), ain't no hold 'em (hey)</p>
                    <p>So lay your cards down, down, down, down</p>
                    <p>So park your Lexus (woo) and throw your keys up (hey)</p>
                    <p>Stick around, 'round, 'round, 'round, 'round (stick around)</p>
                    <p>And I'll be damned if I can't slow dance with you</p>
                    <p>Come pour some sugar on me, honey too</p>
                    <p>It's a real life boogie and a real life hoedown</p>
                    <p>Don't be a bitch, come take it to the floor now (woo)</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;