import axios from 'axios';
import React, { useState } from 'react';
import AllCustomer from './AllCustomer/AllCustomer';
import "./ManageBooking.css";

const ManageBooking = () => {
    const [customers,setCustomers] = useState([]);
    // const [singleCustomer,setSingleCustomer] = useState({});
    axios.get("http://localhost:5000/manageBooking")
    .then(res =>{
        setCustomers(res.data);
    })
    // console.log(customers);
    return (
        <div>
            <h2 className="my-5">All Booking</h2>
            <div>
                {
                    customers.map(customer=><AllCustomer key={customer._id} customers={customer}></AllCustomer>)
                }
            </div>
        </div>
    );
};

export default ManageBooking;