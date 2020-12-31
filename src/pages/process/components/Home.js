import apple from "../assets/apple.png";
import samsung from "../assets/samsung.png";
import huawei from "../assets/huawei.png";
import {NavLink} from "react-router-dom";
import bgImg from "../assets/bg-img.png";
import React from "react";

const Home = ({type}) => {

    const brands = [
        {
            key: 1,
            img: apple,
            nav: '/apple'
        },
        {
            key: 2,
            img: samsung,
        },
        {
            key: 3,
            img: huawei,
        }
    ]

    return (
        <div className='container'>
            <div className='card shadow-sm rounded-3 my-4'>
                <div className='card-body p-4'>
                    <p className='sell-title mx-5 mt-3'>{type} your mobile for instant cash</p>
                    <div className='row px-5 mt-5'>
                        <div className='col-12 col-md-7 d-flex flex-column'>
                            <div
                                className='sell-input d-flex justify-content-between align-items-center border px-3 px-md-5'>
                                <input className='w-100 py-3 me-3' type="text"
                                       placeholder='Search Your Mobile to Process'/>
                                <i className='fa fa-search text-danger'/>
                            </div>

                            <div className='d-flex align-items-center justify-content-center mt-5'>
                                <hr className='flex-grow-1'/>
                                <span className='sell-subtitle fw-bold w-auto mx-3'>Or Choose Your Brand</span>
                                <hr className='flex-grow-1'/>
                            </div>


                            <div className='d-flex justify-content-evenly align-content-stretch mt-4'>
                                {
                                    brands.map(item => {
                                        return (
                                            <NavLink to='/process/models'>
                                                <img key={item.key} className='cursor-pointer h-75' src={item.img}
                                                     alt=''/>
                                            </NavLink>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <img className='col-md-5 d-none d-md-block img-fluid' src={bgImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
