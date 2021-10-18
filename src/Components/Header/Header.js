import React from 'react';
import './Header.css';
import HeaderImage from '../../Images/header-image.jpg';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                        <div>
                            <small>A journey of 10 years!</small>
                            <h1>Khan Eye Hospital</h1>
                            <p>We provide best eye care service since 2011</p>
                            <button className="btn btn-dark">Book an Appointment</button>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 p-3">
                        <img className="img-fluid p-5" src={HeaderImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;