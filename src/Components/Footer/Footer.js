import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12 p-3">
                        <h5>Our Mission</h5>
                        <p className="mission pe-lg-3 fs-6"> As the eye care sector was growing rapidly in Bangladesh, a specialized hospital for the treatment of eye related diseases was much needed. It is the best eye care institute of the country and coordinates the provision of specialized ophthalmological services</p>
                    </div>
                    <div className="col-md-4 col-12 ps-md-5 p-3">
                        <div className="important-links">
                            <p>Important Links</p>
                            <p className="mb-1"><a href="privacy-policy.html">Privacy Policy</a></p>
                            <p className="mb-1"><a href="privacy-policy.html">Terms of Service</a></p>
                            <p className="mb-1"><a href="privacy-policy.html">Newsroom</a></p>
                            <p className="mb-1"><a href="privacy-policy.html">Career</a></p>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 p-3">
                        <p>Want to hear from us?</p>
                        <input type="email" className="w-100 px-2" placeholder="Your email address"/>
                        <button className="btn btn-light mt-3">Subscribe</button>
                    </div>
                </div>
                <div className="row">
                    <p className="mb-0 text-center">All Rights Reserved | @2021</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;