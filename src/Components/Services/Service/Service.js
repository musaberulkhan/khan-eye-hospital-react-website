import React from 'react';
import './Service.css';

const Service = (props) => {
    const {id, name, image, description} = props.service;
    const { handleViewDetailsClick } = props;
  
    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{`${description.slice(0, 100)}.....`}</p>
                </div>
                <div className="card-footer">
                    <button onClick={() => handleViewDetailsClick(id)}  className="w-100 btn btn-dark">View Details</button>
                </div>
            </div>
        </div >
    );
};

export default Service;