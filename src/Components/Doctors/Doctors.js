import React, { useEffect, useState } from 'react';
import Doctor from './Doctor/Doctor';

const Doctors = () => {

    // ----------   States   ----------
    const [doctors, setDoctors] = useState([]);

    // ---------- Load Doctor from API ----------
    useEffect(()=>{
        fetch('doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, []);

    return (
        <div className="container pt-5">
            <h1 className="text-center my-5">Our Doctors</h1>

            {/* ---------- Display Doctors ---------- */}
            <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-2">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;