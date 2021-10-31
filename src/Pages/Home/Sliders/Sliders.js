import axios from 'axios';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Sliders.css";

const Sliders = () => {
    const [sliders,setSliders] = useState([]);
    axios.get("https://nameless-savannah-22070.herokuapp.com/sliders")
    .then(res=>{
        setSliders(res.data);
    })
    return (
        <div>
            <Carousel>
            <Carousel.Item>
                <div>
                    {
                     sliders.map(slider => <span key={slider._id}>
                         <img
                            id="carosel"
                            className="d-block w-100"
                            src={slider.slider1}
                            bg="373940"
                            alt=""
                            />
                     </span> )    
                    }
                </div>
                <Carousel.Caption>
                <h3>Orna Travel Agency</h3>
                <p className=" fw-bolder">Orna Travels is a trusted and reliable tour and travel among all the leading and updated tour-operating services in Bangladesh.</p>
                <Link to="/services">
                <button type="button" className="btn btn-primary border-0 rounded-0 fw-bolder">Take Service</button>
                </Link>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Sliders;