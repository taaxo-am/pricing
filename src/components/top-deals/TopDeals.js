import React from 'react';
import Slider from "react-slick";

import IPhone from './../../assets/img/iphone-11-pro.png'

const TopDeals = () => {
    const settings = {
        infinite: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 5.3,
        centerPadding: "60px",
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2.3,
                }
            },
        ]
    };

    return (
        <div className='container mx-auto mt-5'>
            <div className='border-start border-warning border-3 px-4'>
                <h4>TOP DEALS</h4>
            </div>

            <div className='d-flex justify-content-between mt-4 px-3'>
                <Slider className='bg-light stories-wrapper bg-warning mw-100 m-0' {...settings}>
                    <Deal/>
                    <Deal/>
                    <Deal/>
                    <Deal/>
                    <Deal/>
                    <Deal/>
                </Slider>
            </div>
        </div>
    );
};

const Deal = () => {
    return (
        <div className='card mx-3 mx-md-4 p-3 m-0'>
            <img className='img-fluid' src={IPhone} alt=""/>
            <h5 className='card-title text-center my-3'>iPhone 11 Pro</h5>
        </div>
    )
}

export default TopDeals;
