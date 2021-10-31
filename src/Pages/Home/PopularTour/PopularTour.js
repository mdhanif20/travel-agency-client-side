import axios from 'axios';
import React, { useState } from 'react';
import Popular from '../Home/Popular/Popular';
import "./PopularTour.css";

const PopularTour = () => {
    const [customers,setCustomers] = useState([]);
    axios.get("http://localhost:5000/popular")
    .then(res =>setCustomers(res.data))
    return (
        <div className="px-md-5 px-3 mx-md-4">
            <h2 className="text-start py-5">Popular Tours In This Year</h2>
           <div id="popular-services">
            {
                    customers.map(customer=><Popular key={customer._id} customer={customer}></Popular>)
                }
           </div>
        </div>
    );
};

export default PopularTour;