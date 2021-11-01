
import axios from 'axios';
import React from 'react';
import "./AllCustomer.css";

const AllCustomer = (props) => {
     const customers = props.customers;
    const {name,email,phone,tour,_id} = customers;
    const handleDeletUser = id =>{
        const proceed = window.confirm("Are you sure,You want to delet it?");
        if(proceed){
            axios.delete(`http://localhost:5000/manageBooking/${id}`)
            .then(res=>{
                // console.log(res);
            })
        }
        
    }
    return (
        <div id="customers" className="rounded my-3 p-3">
            <div className="text-start ps-2" id="customerFirst">
                <h5>Name: {name}</h5>
                <h6>Email: {email}</h6>
            </div>
            
           <div className="text-start ps-2"  id="customersecond">
                <h6>Phone: {phone}</h6>
                <h6>Tour Place: {tour}</h6>
           </div>
           <div className="text-start ps-2" id="customerThird">
                <button onClick={()=>handleDeletUser(_id)}className="btn btn-primary">Delete</button>
           </div>
            
        </div>
    );
};

export default AllCustomer;