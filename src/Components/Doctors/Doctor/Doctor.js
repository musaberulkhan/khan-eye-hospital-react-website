import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css';

const Doctor = (props) => {
    const {name, image, designation} = props.doctor;
   
    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{`Dr. ${name}`}</h5>
                    <p className="card-text">{designation}</p>
                </div>
                <div className="card-footer">
                    <Link className="w-100 btn btn-dark" to="/appointment">Book Appointment</Link>
                </div>
            </div>
        </div >
    );
};

export default Doctor;