import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Facts = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='h-height0'>
            {/* Title */}
            <div className='font-poppins pt-12 lg:pt-20 pb-8 text-4xl font-extrabold text-center lg:text-left lg:ml-10'>
                FACTS
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 ml-10 mr-10 gap-y-4'>
                {/* Facts about song */}
                <div className='font-poppins lg:py-8 lg:pr-8 text-left h-40 lg:h-72 overflow-hidden hover:overflow-auto'>
                    <p>“TEXAS HOLD ‘EM” is one of Beyonce’s surprise single from a her upcoming country-themed album, Renaissance act II. It was teased during her Super Bowl LVIII commercial and shortly released after.
                        The country song has heavy western and southern influences and can be seen as a love letter to the south and Beyoncé’s southern roots. The song features a banjo and viola played by Rhiannon Giddens.
                    </p>
                </div>
                {/* Facts about artist */}
                <div
                    data-aos="fade-left"
                    data-aos-delay="100"
                    data-aos-easing="ease-in-sine"
                    className='font-poppins p-2 lg:p-8 text-left bg-custom-red shadow-lg shadow-black h-40 lg:h-72 overflow-hidden hover:overflow-auto'>
                    <p>Beyoncé Giselle Knowles-Carter (born September 4, 1981), better known professionally by her first name Beyoncé, is an American singer, rapper, songwriter, producer, actress and businesswoman.
                        In the twenty-first century, no pop star was as poised, as polished, or as generally fierce as Beyoncé. She scored early success with Destiny’s Child, who started out as a sexier and sassier (if less adult) version of TLC, then steadily became more and more of a vehicle for Beyoncé’s operatic vocals and general diva-tude, which may have been the plan all along.
                        Whether appearing in TV spots, co-starring in films like Dreamgirls, or killing it every night on stadium tours, Beyoncé was omnipresent in the 2000s. Almost everybody, Beygency member or otherwise, loved shiny, hip-hop-fueled hits like “Crazy in Love”, and “Single Ladies (Put a Ring on It)”. Moving into the 2010s, Beyoncé fights on, gaining more and more traction in pop culture with her work and music.
                        She has made a significant impact upon the music landscape in general with her recent albums 4 and BEYONCÉ, which explored complex themes like motherhood, feminism, marriage, sexuality, and doubt in a greater depth. With Lemonade, she went a step further—the fierce, intimate exploration of marriage, infidelity, and forgiveness was her most personal album yet.
                        In 2018, after years of rumors, Yoncé released the joint collaboration EVERYTHING IS LOVE with husband JAY-Z, paying tribute to their relationships and bringing a sonic edge to their healing process after the scandal and heartbreak expressed on Lemonade.
                        In 2022, she released RENAISSANCE, a musically daring trip through Dance, House, Disco and Ballroom past, present, and future.
                        As music continues to evolve in sound and subject, Beyoncé continues to make her mark on the music industry and pop culture in general with her boundary-pushing, empowering, and evocative music. She is currently the most awarded artist alive (the second in history) and also has the record for the most nominations and wins in Grammy history.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Facts;


