import React from 'react';
import './Helpline';
import HelplineImage from '../../Images/helpline.jpg';

const Helpline = () => {
    return (
        <div className="helpline container my-5">
            <div className="row">
                <div className="col-md-6 col-12 p-5">
                    <img className="img-fluid" src={HelplineImage} alt="" />
                </div>
                <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                    <div>
                        <h2>Need any support from us?</h2>
                        <h6>Call us now! Our customer care executives are ready for your servies</h6>
                        <h1>+880 96096-00000</h1>
                        <h6>You can also make an appointment through phone call</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Helpline;