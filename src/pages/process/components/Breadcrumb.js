import {NavLink} from "react-router-dom";
import React from "react";

const Breadcrumb = () => {
    return (
        <div className='container'>
            <nav className='mt-4' aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <NavLink className='text-decoration-none' to='/'>
                            <a className='text-decoration-none' href="/sell">Home</a>
                        </NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Sell Phones</li>
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumb
