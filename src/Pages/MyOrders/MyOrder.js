// import axios from 'axios';
import React from 'react';

const MyOrder = (props) => {
    
        const customer = props.myOrder;
        console.log(customer);
       
    return (
        
        <div>
            <h2>My Confirmed orders</h2>
            <h2>{customer.name}</h2>
        </div>
         
    );
};

export default MyOrder;