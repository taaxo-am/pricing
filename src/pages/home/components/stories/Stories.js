import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './stories.css'
import avatar from './avatar.png'

const Stories = () => {
    const settings = {
        infinite: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 2.3,
        centerPadding: "60px",
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <div className='container mx-auto mt-5'>
            <div className='border-start border-warning border-3 px-4'>
                <h4>CUSTOMER STORIES</h4>
            </div>

            <div className='my-4 bg-light px-3'>
                <Slider className='mw-100' {...settings}>
                    <Story/>
                    <Story/>
                    <Story/>
                    <Story/>
                    <Story/>
                    <Story/>
                    <Story/>
                </Slider>
            </div>
        </div>
    );
};

const Story = () => {
    return (
        <div className='card story shadow mx-3 mb-3 px-5 py-4'>
            <div className='d-flex'>
                <img className='' src={avatar} alt=""/>
                <div className='d-flex flex-column mt-2 ms-4'>
                    <h5>Maxamuud jamac</h5>
                    <small className='text-muted'>(Hargeisa)</small>
                </div>
            </div>
            <div className='mt-3'>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu
                    labore et dolore magna aliquyam.
                </p>
                <p className='text-danger m-0'>
                    16 Dec, 2020
                </p>
            </div>
        </div>
    )
}

export default Stories;
