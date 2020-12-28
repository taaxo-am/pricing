import React from 'react';
import thanks from '../assets/img/thanks.png'
import {NavLink} from "react-router-dom";

const Thanks = () => {
    return (
        <div className='container'>
            <h1 className='mx-5 mt-4 mb-3 text-uppercase'>Thank you</h1>
            <div className='card mx-5 mb-4'>
                <div className='card-body d-flex flex-column align-items-center p-5'>
                    <img style={{width: '200px'}} className='h-auto mx-5' src={thanks} alt=""/>
                    <h3 className='mt-5 fw-bold'>THANK YOU FOR TRUSTING US </h3>
                    <h4 className='text-primary fw-bold mb-4'>COME BACK ANYTIME </h4>
                    <NavLink to='/'>
                        <button className='btn btn-primary px-5'>FINISH</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Thanks;
