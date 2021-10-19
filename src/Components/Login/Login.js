import React from 'react';
import './Login.css';
import GoogleImage from '../../Images/google.png';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                console.log(result);
            })
    }

    const loginFormSubmit = (e) => {
       
    }


    return (
        <div className="login container d-flex justify-content-center align-items-center my-5">
            <div className="login-container">
                <h3 className="text-center mb-3">Login</h3>
                <form onSubmit={loginFormSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="Your email address" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Your password" />
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <input type="submit" className="btn btn-dark px-4" value="Login" />
                    </div>
                </form>
                <p>Don't have an account? <Link to="/register">Create Account</Link></p>
                <div className="d-flex flex-column align-items-center others-signin">
                    <p className="my-2">Or Login With</p>
                    <button onClick={handleGoogleSignIn} className="google-signin-btn">
                        <img className="img-fluid" src={GoogleImage} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;