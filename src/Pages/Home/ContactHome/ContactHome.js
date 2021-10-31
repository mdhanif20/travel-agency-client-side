import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../../images/banner.jpg"
import "./ContactHome.css";
const ContactHome = () => {
    return (
        <div>
            <div id="contact" className="card bg-dark text-white border-0 my-5">
                <img src={img} id="contactImg" className="card-img" alt="..."/>
                
                        <div className="card-img-overlay">
                            <div className="row py-5">
                                <div className="col-8 text-start">
                                <h5 className="card-title">Orna Travels Agency</h5>
                                    <p className="card-text">Proud to set the standard for complete, reliable, convenient protection of your health. Ideal plans for international leisure, missionary or business travel.</p>
                                    <p className="card-text"></p>
                                </div>
                                <div className="col-4">
                                     <Link to="/contact"><button type="button" className="btn btn-primary my-5 fw-bolder">Contact With Us</button></Link>
                                </div>
                            </div>
                            
                        
                    
                </div>
                
                </div>

        </div>
    );
};

export default ContactHome;