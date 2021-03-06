import React from 'react';

import BuyImg from '../assets/services-buy-phone.png'
import SellImg from '../assets/services-sell-phone.png'
import ExchangeImg from '../assets/services-exchange-phone.png'
import {NavLink} from "react-router-dom";

const Services = () => {
    return (
        <div id='services' className='container mx-auto'>
            <div className='card shadow-sm mt-5 m-md-5 px-3'>
                <h3 className='card-title text-center mt-4'>Choose a Services</h3>
                <div className='row row-cols-1 row-cols-md-3 py-4 px-3'>
                    <a href='https://muraadso.com' className='text-decoration-none text-primary'>
                        <ServiceItem type={"Buy Phone"} img={BuyImg}/>
                    </a>
                    <a href='/process' className='text-decoration-none text-primary'>
                        <ServiceItem type={"Sell Phone"} img={SellImg}/>
                    </a>
                    <a href='/process' className='text-decoration-none text-primary'>
                        <ServiceItem type={"Exchange Phone"} img={ExchangeImg}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

const ServiceItem = ({type, img}) => {
    return (
        <div className='d-flex flex-column justify-content-center mb-4'>
            <div className='bg-white border rounded-3 cursor-pointer animation-hover-scale mx-3'>
                <img className='img-fluid border-bottom rounded-top w-100' src={img} alt=""/>
                <h4 className='my-3 text-center'>{type}</h4>
            </div>
        </div>
    )
}


export default Services;
