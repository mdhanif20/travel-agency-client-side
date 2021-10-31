import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Services.css";

const Services = () => {
    const [services,setServices] = useState([]);
    axios.get("http://localhost:5000/services")
    .then(res =>{
        setServices(res.data);
    })
    return (
        <div>
            
            <div className="row px-md-5 py-md-5 py-3">
                <div className="col-md-9 px-md-5 px-1" id="service-area">
                    <h2 className="text-start text-bolder pb-3"> <small>Popular Destinations</small> </h2>
                    {
                        services.map(service => <div className="card mb-3 rounded-0"
                        key={service._id} id="service-card">
                        <div className="row g-0" id="single-service">
                          <div className="col-md-4">
                            <img src={service.img1} className="img-fluid rounded-start w-100 p-2" id="service-img" alt="..."/>
                          </div>
                          <div className="col-md-8 text-start">
                            <div className="card-body">
                              <h5 className="card-title">{service.name}</h5>
                              <p className="card-text"><small className="text-muted">{service.time}</small></p>
                              <p className="card-text">{service.desciption.slice(0,130)}....</p>
                             <Link to="/booking">
                             <button type="button" className="btn btn-primary border-0 rounded-0 fw-bolder">Book Now</button>
                             </Link>
                            </div>
                          </div>
                        </div>
                      </div>)
                    }
                </div>
                <div className="col-md-3">

                </div>
            </div>
        </div>
    );
};

export default Services;