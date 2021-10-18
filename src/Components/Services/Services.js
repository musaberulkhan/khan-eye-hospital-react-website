import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);


    return (
        <div className="container">
            <h1 className="text-center my-5">Services</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">                
                    {
                        services.map(service => <Service
                            key={service.id}
                        ></Service>)
                    }
                    {/* <div class="card h-100">
                        <img src="..." class="card-img-top" alt="...">
                        <div class ="card-body">
                        <h5 class ="card-title">Card title</h5>
                        <p class ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        </div>
                        <div class ="card-footer">
                        <small class ="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div> */}
                </div>
            </div>

       
    );
};

export default Services;