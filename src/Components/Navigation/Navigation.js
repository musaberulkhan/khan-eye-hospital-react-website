import React from 'react';
import './Navigation.css';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Logo from '../../Images/logo.png';
import useAuth from '../../Hooks/useAuth';


const Navigation = () => {
    const { user, logOut } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <NavLink className="navbar-brand me-5" to="/">
                    <img className="img-fluid navbar-brand-image" src={Logo} alt="" />
                    KHAN EYE HOSPITAL</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/services">Services</NavLink>
                        <NavLink className="nav-link" to="/doctors">Doctors</NavLink>
                    </div>
                </div>
                <div>
                    {
                        user?.email ?
                            (
                                <div>
                                    <span className="text-muted"><small>{user.email}</small></span>
                                    <button className="btn btn-light ms-2" onClick={logOut}> Log Out </button>
                                </div>
                            )
                            :
                            (
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            )
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navigation;