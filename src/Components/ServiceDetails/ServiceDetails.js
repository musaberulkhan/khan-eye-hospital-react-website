import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState()

    // --------   Fetch and Set Services Data   ----------
    useEffect(() => {
        fetch('../services.json')
            .then(res => res.json())
            .then(data => {
                data.forEach(service => {
                    if (service.id === serviceId) {
                        setService(service);
                    }
                });
            })
    }, [serviceId]);  

    return (
        <div className="container py-5 px-4">
            <h1>{service?.name}</h1>
            <div className="d-flex justify-content-center my-4">
                <img src={`../${service?.image}`} alt="" />
            </div>
            <p>{service?.description}</p>
        </div>
    );
};

export default ServiceDetails;