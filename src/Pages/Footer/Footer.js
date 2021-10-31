import React from 'react';
import { AiFillFacebook,AiFillInstagram,AiFillLinkedin} from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';

import "./Footer.css";
const Footer = () => {
    return (
        <div className="px-5  bg-dark py-4">
            <div className="row text-white">
                <div className="col-6">
                    <h2>Orna Travels</h2>
                    <p>Insecurity is a waste of time. When I was young, I lived like an old woman, and when I got old, I had to live like young person. Lorem ipsum dolor sit amet, consec adipiscinglit. Aenean commodo.</p>
                    <p id="footer-icon"><AiFillFacebook className="fs-2 mx-1"/><BsTwitter className="fs-2 mx-1"/> <AiFillInstagram className="fs-2 mx-1"/> <AiFillLinkedin className="fs-2 mx-1"/></p>
                    <small>
                    Copyright © 2021 ThemeSphere. All rights reserved. Designed by Mohammad Hanif.
                    </small>
                </div>
                <div className="col-6">
                <form action="#" id="form">
                        <input type="email" placeholder="Email" />
                        <textarea name="" id="" placeholder="Write your comment..."></textarea> <br />
                        <input className="btn btn-primary fw-bolder" type="Submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;