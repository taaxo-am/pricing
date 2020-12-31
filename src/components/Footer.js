import React from 'react';
import Logo from './../assets/img/logo.png'

const Footer = () => {
    return (
        <footer className='bg-primary text-white px-3'>
            <div className='container py-5'>
                <img src={Logo} alt=""/>
                <div className='row row-cols-2 row-cols-md-4 py-4 mt-1 mt-md-4 gy-5'>
                    <div className='col'>
                        <h6 className='fw-bold'>About Muraadso</h6>
                        <small>Lorem ipsum dolor sit amet,<br/> consetetur sadipscing elitr, sed<br/>  diam nonumy eirmod tempor.</small>

                        <h6 className='fw-bold mt-4'>Contact us</h6>
                        <small>524783 / 0633333471</small>
                    </div>

                    <div className='col text-center'>
                        <h6 className='fw-bold'>Information</h6>
                        <a href='https://www.muraadso.com' className='d-block text-white'><small>Main Web</small></a>
                        <a href='https://https://www.muraadso.com/about' className='d-block text-white'><small>About us</small></a>
                        <a href='/' className='d-block text-white'><small>Services</small></a>
                    </div>

                    <div className='col text-md-center'>
                        <h6 className='fw-bold'>Helpful Links</h6>
                        <a href='https://muraadso.com' className='d-block text-white'><small>Buy Phone</small></a>
                        <a href='/process' className='d-block text-white'><small>Sell Phone</small></a>
                        <a href='/process' className='d-block text-white'><small>Exchange Phones</small></a>
                    </div>

                    <div className="col d-flex flex-column align-items-end">
                        <div>
                            <p>Subscribe <br />for more info</p>
                            <input type="text" className='form-control form-control-sm w-auto' placeholder='Email'/>
                            <input type="submit" value='Subscribe' className='btn btn-dark mt-2'/>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="d-flex justify-content-center" style={{fontSize: '20px'}}>
                    <i className='fab fa-facebook cursor-pointer'/>
                    <i className='fab fa-youtube cursor-pointer mx-4'/>
                    <i className='fab fa-tiktok cursor-pointer'/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
