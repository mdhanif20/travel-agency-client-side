import axios from 'axios';
import React from 'react';

const MyOrder = (props) => {
    const name = props.name;
    console.log(name);
    axios.get("https://nameless-savannah-22070.herokuapp.com/manageBooking")
    .then(res=>{
        console.log(res.data);
    })
    return (
        <div>
            <h2>My orders page</h2>
        </div>
    );
};

export default MyOrder;