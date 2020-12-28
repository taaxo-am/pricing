import React from 'react';
import './hero.css'

import heroCarouselBuy from '../../assets/hero-carouse-buy.png'
import heroCarouselSell from '../../assets/hero-carousel-sell.png'
import heroCarouselExchange from '../../assets/hero-carousel-exchange.png'
import {NavLink} from "react-router-dom";

const Hero = () => {
    return (
        <div className='hero bg-primary'>
            <Carousel/>
        </div>
    );
};

const Carousel = () => {

    const items = [
        {
            name: 'BUY NEW AND ORIGINAL PHONES',
            action: 'BUY NOW',
            location: 'https://muraadso.com',
            img: heroCarouselBuy,
        },
        {
            name: 'SELL YOUR PHONE WITH MURAADso.com',
            action: 'SELL NOW',
            location: '/sell',
            img: heroCarouselSell,
        },
        {
            name: 'EXCHANGE YOUR PHONE WITH ANOTHER',
            action: 'EXCHANGE NOW',
            location: '/exchange',
            img: heroCarouselExchange,
        }
    ]

    return (
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"/>
                <li data-bs-target="#heroCarousel" data-bs-slide-to="1"/>
                <li data-bs-target="#heroCarousel" data-bs-slide-to="2"/>
            </ol>
            <div className="carousel-inner">

                {
                    items.map((item, index) => {
                        return (
                            <div className={`carousel-item ${index === 0 && 'active'}`}>
                                <CarouselItem item={item}/>
                            </div>
                        )
                    })
                }

            </div>
            <a className="carousel-control-prev" href="#heroCarousel" role="button"
               data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#heroCarousel" role="button"
               data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
    )
}

const CarouselItem = ({item}) => {
    return (
        <div className='container-sm mb-5 mb-md-0'>
            <div className="row row-cols-1 row-cols-md-2">
                <div className='col order-1 order-md-0'>
                    <div
                        className='d-flex flex-column justify-content-center align-items-center align-items-md-start h-100 ms-md-5'>
                        <h1 className='fw-bold text-center text-md-start hero-title'>{item.name}</h1>
                        <a href={item.location}>
                            <button className='btn btn-dark rounded-pill px-5 mt-3'>{item.action}</button>
                        </a>
                    </div>
                </div>
                <div className='col order-0 order-md-1 d-flex'>
                    <img className='img-fluid ms-auto' style={{height: '372px'}} src={item.img} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Hero;
