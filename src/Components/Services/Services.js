import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Service from './Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);
    let history = useHistory();


     // --------   Handle View Details Click Listener   --------
     const handleViewDetailsClick = (serviceId) => {
        history.push(`servicedetails/${serviceId}`)
    }

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);


    return (
        <div className="container">
            <h1 className="text-center my-5">Services</h1>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                        handleViewDetailsClick={handleViewDetailsClick}
                    ></Service>)
                }
            </div>
        </div>


    );
};

export default Services;