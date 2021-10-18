import React from 'react';
import './Login.css';
import GoogleImage from '../../Images/google.png';

const Login = () => {
    return (
        <div className="login container d-flex justify-content-center align-items-center my-5">
            <div className="login-container">
                <h3 className="text-center mb-3">Login</h3>
                <form action="">
                    <div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input type="email" class="form-control" placeholder="Your email address"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" placeholder="Your password"/>
                    </div>
                    <div class="mb-3 d-flex justify-content-center">                        
                        <input type="submit" class="btn btn-dark px-4" value="Login"/>
                    </div>
                    <div class="d-flex flex-column align-items-center others-signin">
                        <p className="my-2">Or Login With</p>                                                
                        <button className="google-signin-btn">
                            <img className="img-fluid" src={GoogleImage} alt="" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;