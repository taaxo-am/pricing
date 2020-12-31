import React from 'react';

import iPhone from '../../assets/img/iphone-11-pro.png'
import {NavLink} from "react-router-dom";

const Result = ({price = 380}) => {
    return (
        <div className='container'>
            <div className="card m-5">
                <div className="row g-5 p-5">
                    <div className='col-12 col-md-3'>
                        <div>
                            <img className='img-fluid' src={iPhone} alt=""/>
                            <h2 className='card-title text-center my-3 text-highlight'>iPhone 11 Pro</h2>
                        </div>
                    </div>
                    <div className='col-12 col-md-9'>
                        <div className='d-flex flex-column justify-content-evenly mt-4 h-75 text-center text-md-start'>
                            <div>
                                <h4 className='fw-bold'>This is your exact offer</h4>
                                <h1 className='mb-3 text-primary'>${price}</h1>
                            </div>
                            <div className='d-flex flex-column flex-md-row align-items-center'>
                                <select className='w-auto ps-3 pe-5 form-select form-select-lg'>
                                    <option selected disabled>Choose your service</option>
                                    <option>Ka IIbsasho</option>
                                    <option>Isku Bedel</option>
                                    <option>U IIbin</option>
                                </select>
                                <NavLink to='/shipping'>
                                    <button className='btn btn-primary btn-lg mt-3 w-auto mt-md-0 ms-md-3'>Submit
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;
