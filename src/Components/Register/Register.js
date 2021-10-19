import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Register';

const Register = () => {
    const { registerUserUsingEmailPassword } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reEnteredPassword, setReEnteredPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const registerFormSubmit = (e) => {
        e.preventDefault();        
        const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isEmailValid = emailReg.test(String(email).toLowerCase());
        setErrorMessage("");

        if(!isEmailValid){
            setErrorMessage("Invalid Email Address");
        }
        else if(password !== reEnteredPassword){         
            setErrorMessage("Password didn't match! Please check again");            
        }        
        else if(password.length <= 6){         
            setErrorMessage("Password Should be more than 6 characters");            
        }        
        else{
            registerUserUsingEmailPassword(email, password)
        }
    }


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleReEnteredPasswordChange = (e) => {
        setReEnteredPassword(e.target.value);
    }


    return (
        <div>
            <div className="login container d-flex justify-content-center align-items-center my-5">
                <div className="login-container">
                    <h3 className="text-center mb-3">Create New Account</h3>
                    <form onSubmit={registerFormSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input onBlur={handleEmailChange} type="text" className="form-control" placeholder="Your email address"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input onBlur={handlePasswordChange} type="password" className="form-control" placeholder="Your password" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input onBlur={handleReEnteredPasswordChange} type="password" className="form-control" placeholder="Re-enter password" />
                        </div>
                        <div className="mb-3 d-flex justify-content-center">
                            <input type="submit" className="btn btn-dark px-4" value="Register" />
                        </div>
                        <p className="text-danger">{errorMessage}</p>
                    </form>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;