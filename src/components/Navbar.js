import React from 'react';
import Logo from '../assets/img/logo.png'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='w-100 bg-primary shadow'>
            <div className='container-sm'>
                <nav className="navbar navbar-expand-lg h-auto p-3 navbar-dark">
                    <div className="container-fluid">
                        <NavLink to='/'>
                            <a className="navbar-brand" href="/">
                                <img className='mb-2' src={Logo} alt=""/>
                            </a>
                        </NavLink>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-lg-5 mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className='text-decoration-none' to='/buy'>
                                        <span className="nav-link active" aria-current="page">Buy</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className='text-decoration-none' to='/sell'>
                                        <span className="nav-link">Sell</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">Exchange</span>
                                </li>
                            </ul>

                            <form className="d-flex ms-auto">
                                <input className="form-control px-4" type="search" placeholder="Search Phone..."
                                       aria-label="Search"/>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
