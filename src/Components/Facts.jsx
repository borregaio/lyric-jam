import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Facts = ({details}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='h-height0 bg-custom-lightGrey'>
            {/* Title */}
            <div className='font-poppins pt-12 lg:pt-20 pb-8 text-4xl font-extrabold text-center xl:text-left lg:ml-10'>
                Song & Artist Facts
            </div>

            <div className='grid  xl:grid-cols-2 md:grid-cols-1 ml-10 mr-10 gap-y-4'>
                {/* Facts about song */}
                <div className='font-poppins lg:py-8 lg:pr-8 text-left text-sm sm:text-base h-40 xl:h-72 overflow-hidden hover:overflow-auto'>
                    <p>
                        {details.description}
                    </p>
                </div>
                {/* Facts about artist */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-easing="ease-in-sine"
                    className='font-poppins p-2 lg:p-8 text-left text-sm sm:text-base bg-custom-red shadow-lg shadow-black h-40 xl:h-72 overflow-hidden hover:overflow-auto'>
                    <p>
                        {details.artistDesc}
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Facts;


