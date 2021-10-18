import React from 'react';
import { Link } from 'react-router-dom';
import './Register';

const Register = () => {

    const registerFormSubmit = () => {

    }

    return (
        <div>
            <div className="login container d-flex justify-content-center align-items-center my-5">
                <div className="login-container">
                    <h3 className="text-center mb-3">Create New Account</h3>
                    <form onSubmit={registerFormSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="Your email address" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Your password" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Re-enter password" />
                        </div>
                        <div className="mb-3 d-flex justify-content-center">
                            <input type="submit" className="btn btn-dark px-4" value="Register" />
                        </div>
                    </form>
                    <p>Already have an account? <Link to="/login">Login</Link></p>                   
                </div>
            </div>
        </div>
    );
};

export default Register;