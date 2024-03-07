/* eslint-disable react/prop-types */
import React from 'react';
import YouTubeEmbed from './YouTubeEmbed';

const Hero = ({ videoData }) => {
    return (
        <div>
            <div className='selected-song font-poppins text-4xl font-extrabold xl:text-left mt-5 xl:ml-12 lg:text-center md:text-center sm:text-center'>
                <h1>{videoData.songName}</h1>
                <h3 className='text-2xl'>{videoData.artist}</h3>
            </div>

            <div className='grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
                <div>
                    <div className='red-div bg-custom-red shadow-md shadow-black relative mx-auto mt-10 md:mb-10'>
                        <div className='image-div bg-black shadow-md shadow-black relative top-10 left-7'>
                            <YouTubeEmbed videoId={videoData.videoId} />
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-easing="ease-in-sine"
                    dangerouslySetInnerHTML={{ __html: videoData.lyrics }} className=' lyrics font-poppins lg:p-10 md:p-10 text-left lg:text-center md:text-center sm:p-20 sm:text-center shadow-black h-40 lg:h-72 overflow-hidden overflow-y-scroll '>
                </div>
            </div>
        </div>
    );
};

export default Hero;