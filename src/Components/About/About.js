import React from 'react';
import './About.css';
import HospitalBuilding from '../../Images/abouthospital.jpg';

const About = () => {
    return (
        <div className="about container px-5 mt-5">
            <h2>Who We Are</h2>
            <p>Khan Eye Hospital is the leader in eye care delivery system being at the forefront of vision care technology revolution having state of the art specialized ophthalmic care, US-FDA/CE approved technologies, diagnostics, treatment and surgery with one-stop mall for eye care products.
                KEH is renowned for blending traditional hospitality with state-of-the-art ophthalmic care. Offering specialized treatment, we are the first choice of local and international patients and important celebrities alike. KEH has been swiftly moving towards its goal of achieving excellence by providing equitable and efficient eye care for everyone.
            </p>

            <p>KEH is staffed by highly qualified ophthalmologist who:
                <ul>
                    <li>are carefully selected for their character, competence and compassion.</li>
                    <li>are all subspecialty doctors trained abroad from reputed institutions.</li>
                    <li>are professors, teachers and mentors in the country's top universities and training institutions.</li>
                    <li>are recognized and respected both locally and internationally.</li>
                </ul>
            </p>
            <img className="img-fluid px-5 py-3" src={HospitalBuilding} alt="" />
        </div>
    );
};

export default About;