import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import * as ReactBootStrap from "react-bootstrap";
import { useEffect } from 'react';
import "./Services.css";
import useFirebase from './../Firebase/useFirebase';

const Services = () => {
    const [services,setServices] = useState([]);
    const [loading,setLoading] = useState(false);
    const {users} = useFirebase({});
    const serviceLoading = async() =>{
      axios.get("https://nameless-savannah-22070.herokuapp.com/services")
      .then(res =>{
          setServices(res.data);
      })
      setLoading(true);
    }
    useEffect(()=>{
      serviceLoading();
  },[])
    
    return (
        <div>
            {
              loading?<div className="row px-md-5 py-md-5 py-3">
              <h2 className="pb-5">Our Services</h2>
              <div className="col-md-9 col-8 px-md-5 ps-4" id="service-area">
                  <h2 className="text-start text-bolder pb-3"> <small  id="services">Popular Destinations</small> </h2>
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
                            <p className="card-text">{service.desciption.slice(0,100)}....</p>
                            {
                              users.email? <Link to="/booking">
                              <button type="button" className="btn btn-primary border-0 rounded-0 fw-bolder">Book Now</button>
                              </Link>
                              :
                              <Link to="/login">
                              <button type="button" className="btn btn-primary border-0 rounded-0 fw-bolder">Book Now</button>
                              </Link>
                            }
                          
                          </div>
                        </div>
                      </div>
                    </div>)
                  }
              </div>
              <div className="col-md-3 col-4">
                  <h3 className="text-start pb-1"> <small id="services">Follow Us</small> </h3>
                  <div className="pt-3">
                      <p id="upper-icon"> 

                      <span id="facebook" className="fb-icon fw-bolder"><FaFacebookF className="fs-4"/> <span className="px-1">Follwers 9.8k</span> </span> 

                      <span id="youtube" className="fw-bolder"><AiFillYoutube className="fs-4"/> <span className="px-2">Subscrib 2.3M</span> </span> 
                      
                       <span id="twiter" className="fw-bolder"><BsTwitter className="fs-4"/> <span className="px-1">Subscrib 2.3M</span> </span> 

                       <span id="instagram" className="fw-bolder"><AiFillInstagram className="fs-4"/> <span className="px-1">Follwers 11.2k</span> </span> 
                      </p>
                  </div>
                  <div>
                      <h4 className="text-start border-bottom pb-2 pt-5">All Service</h4>
                      {
                          services.map(service =><div key={service._id} className="card mb-3 border-0">
                          <div className="row g-0" id="all-service">
                            <div className="col-md-4 col-4">
                              <img id="allService-img" src={service.img2} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8 col-8 ps-2">
                              <div className="card-body p-0 text-start">
                                <h6 className="card-title mb-0" id="all-service-header">{service.name}</h6>
                                <p className="card-text" id="allServiceDes">
                                    {service.desciption.slice(0,50)}</p>
                              </div>
                            </div>
                          </div>
                        </div>)
                      }
                  </div>
                  <div>
                  <h4 className="text-start border-bottom pb-2 pt-3">Contact Us</h4>
                  <form action="#" id="form">
                      <input type="email" placeholder="Email" />
                      <textarea name="" id="" placeholder="Write your comment..."></textarea> <br />
                      <input className="btn btn-primary fw-bolder" type="Submit" value="Send" />
                  </form>
                  </div>
              </div>
          </div>:
            <ReactBootStrap.Spinner animation="border" />
            }
            {/* <div className="row px-md-5 py-md-5 py-3">
                <h2 className="pb-5">Our Services</h2>
                <div className="col-md-9 col-8 px-md-5 ps-4" id="service-area">
                    <h2 className="text-start text-bolder pb-3"> <small  id="services">Popular Destinations</small> </h2>
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
                              <p className="card-text">{service.desciption.slice(0,100)}....</p>
                              {
                                users.email? <Link to="/booking">
                                <button type="button" className="btn btn-primary border-0 rounded-0 fw-bolder">Book Now</button>
                                </Link>
                                :
                                <Link to="/login">
                                <button type="button" className="btn btn-primary border-0 rounded-0 fw-bolder">Book Now</button>
                                </Link>
                              }
                            
                            </div>
                          </div>
                        </div>
                      </div>)
                    }
                </div>
                <div className="col-md-3 col-4">
                    <h3 className="text-start pb-1"> <small id="services">Follow Us</small> </h3>
                    <div className="pt-3">
                        <p id="upper-icon"> 

                        <span id="facebook" className="fb-icon fw-bolder"><FaFacebookF className="fs-4"/> <span className="px-1">Follwers 9.8k</span> </span> 

                        <span id="youtube" className="fw-bolder"><AiFillYoutube className="fs-4"/> <span className="px-2">Subscrib 2.3M</span> </span> 
                        
                         <span id="twiter" className="fw-bolder"><BsTwitter className="fs-4"/> <span className="px-1">Subscrib 2.3M</span> </span> 

                         <span id="instagram" className="fw-bolder"><AiFillInstagram className="fs-4"/> <span className="px-1">Follwers 11.2k</span> </span> 
                        </p>
                    </div>
                    <div>
                        <h4 className="text-start border-bottom pb-2 pt-5">All Service</h4>
                        {
                            services.map(service =><div key={service._id} className="card mb-3 border-0">
                            <div className="row g-0" id="all-service">
                              <div className="col-md-4 col-4">
                                <img id="allService-img" src={service.img2} className="img-fluid rounded-start" alt="..."/>
                              </div>
                              <div className="col-md-8 col-8 ps-2">
                                <div className="card-body p-0 text-start">
                                  <h6 className="card-title mb-0" id="all-service-header">{service.name}</h6>
                                  <p className="card-text" id="allServiceDes">
                                      {service.desciption.slice(0,50)}</p>
                                </div>
                              </div>
                            </div>
                          </div>)
                        }
                    </div>
                    <div>
                    <h4 className="text-start border-bottom pb-2 pt-3">Contact Us</h4>
                    <form action="#" id="form">
                        <input type="email" placeholder="Email" />
                        <textarea name="" id="" placeholder="Write your comment..."></textarea> <br />
                        <input className="btn btn-primary fw-bolder" type="Submit" value="Send" />
                    </form>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Services;