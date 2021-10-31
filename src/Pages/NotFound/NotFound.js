import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../images/notfound.png"
const NotFound = () => {
    return (
        <div>
            <h2 className="pt-5">Page Not Found 404</h2>
            <img src={img} alt="" />
            <Link to="/home"> <br />  <br />  
            <button type="button" className="btn btn-primary fw-bolder mb-5">Back Home Page</button>
            </Link>
        </div>
    );
};

export default NotFound;