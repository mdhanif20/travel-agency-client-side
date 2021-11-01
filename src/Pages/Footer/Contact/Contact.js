import React from 'react';
import img from "../../../images/HILmr.png";
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle,AiFillLinkedin } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import "./Contact.css";

const Contact = () => {
    return (
        <div>
            <h2 className="mt-5">Contact With Us</h2>
            <div class="card mb-3 border-0 p-md-5 p-2" >
                <div class="row g-0">
                    <div class="col-md-5">
                    <img src={img} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-7">
                    <div class="card-body">
                    <form action="">
                        <input type="text" placeholder="Email" className="w-100 border rounded my-1" /> <br />
                        <textarea type="password" className="w-100 border rounded my-1"  placeholder="write your message" /> <br />
                       
                        <input type="submit" className="w-100 border rounded my-1 fw-bolder" value="Send" /> 
                    </form>
                    <div className="contact mt-5">
                        <span><BsFacebook/></span>
                        <span><AiFillLinkedin/></span>
                        <span><AiFillTwitterCircle/></span>
                        <span><FaInstagram/></span>
                       
                    </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Contact;