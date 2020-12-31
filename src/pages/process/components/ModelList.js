import React from "react";
import iPhone from '../../../assets/img/iphone-11-pro.png'
import {NavLink} from "react-router-dom";

const ModelList = () => {
    return (
        <div className='container'>
            <div className='mt-4 d-flex flex-column flex-md-row justify-content-between align-items-center'>
                <h3 className='mb-md-0'>Select Your iPhone Model:</h3>
                <div
                    className='bg-white sell-input small d-flex justify-content-between align-items-center border rounded px-4'>
                    <input className='w-100 py-2 me-3' type="text"
                           placeholder='Search Phones'/>
                    <i className='fa fa-search text-danger'/>
                </div>
            </div>

            <div className='row row-cols-2 row-cols-lg-5 g-3 g-lg-5 mt-2'>
                {
                    Array(20).fill().map(n => {
                        return (
                            <div key={n} className='col'>
                                <NavLink to='/process/questions' className='text-body text-decoration-none'>
                                    <div className='cursor-pointer card p-3'>
                                        <img className='img-fluid' src={iPhone} alt=""/>
                                        <h5 className='card-title text-center my-3'>iPhone 11 Pro</h5>
                                    </div>
                                </NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ModelList
