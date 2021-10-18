import React from 'react';
import './Navigation.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from '../../Images/logo.png';


const Navigation = () => {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <Link className="navbar-brand me-5" to="/">
                            <img className="img-fluid navbar-brand-image" src={Logo} alt="" />
                            KHAN EYE HOSPITAL</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                <Link className="nav-link" to="/services">Services</Link>
                                <Link className="nav-link" to="/doctors">Doctors</Link>                                
                                <Link className="nav-link" to="/about">About</Link>                                
                            </div>
                        </div>
                        <div>
                            <Link className="nav-link">Login</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </Router>
    );
};

export default Navigation;