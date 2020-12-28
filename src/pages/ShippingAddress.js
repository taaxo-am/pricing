import React from 'react';
import shipping from "../assets/img/shipping-img.png";
import {NavLink} from "react-router-dom";

const ShippingAddress = () => {
    return (
        <div className='container'>
            <h3 className='mx-4 mt-5 mb-3 text-uppercase fw-bold text-center text-md-start'>Contact and Shipping
                Adress</h3>

            <div className="row gx-5">
                <div className='col-12 col-md-8'>
                    <div className='card mb-4'>
                        <div className='card-header bg-white p-3'>SHIPPING ADDRESS</div>
                        <div className='card-body py-4 px-5'>
                            <div className="row row-cols-2 g-4">
                                <div className='col'>
                                    <label htmlFor="">First Name</label>
                                    <input type='text' className='form-control'/>
                                </div>

                                <div className='col'>
                                    <label htmlFor="">Last Name</label>
                                    <input type='text' className='form-control'/>
                                </div>

                                <div className='col'>
                                    <label htmlFor="">City</label>
                                    <input type='text' className='form-control'/>
                                </div>

                                <div className='col'>
                                    <label htmlFor="">District</label>
                                    <input type='text' className='form-control'/>
                                </div>

                                <div className='col'>
                                    <label htmlFor="">Trade mark</label>
                                    <input type='text' className='form-control'/>
                                </div>

                                <div className='col'>
                                    <label htmlFor="">Phone Number</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="addon">063</span>
                                        <input type="text" className="form-control" aria-describedby="addon"/>
                                    </div>
                                </div>
                            </div>

                            <NavLink to='/thanks'>
                                <button className='btn btn-primary px-5 mt-3'>Submit</button>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className='d-none d-md-block col-md-4'>
                    <img className='img-fluid' src={shipping} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ShippingAddress;
