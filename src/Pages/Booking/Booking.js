import React, {useRef, useState} from 'react';
import axios from 'axios';
const Booking = () => {
    // const [customer,setCustomer] = useState("");
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const tourRef = useRef();
    /*  const customerData = () =>{
        axios.get(`https://nameless-savannah-22070.herokuapp.com/booking/${customer}`)
        .then(res=>{
            console.log(res);
        })
    }  */
    const handleBookingInfo = e =>{
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const tour = tourRef.current.value;
        const booking = {name,email,phone,address,tour};
        const clearing = () =>{
            nameRef.current.value="";
            emailRef.current.value="";
            phoneRef.current.value="";
            addressRef.current.value="";
        }
        axios.post("https://nameless-savannah-22070.herokuapp.com/booking",booking)
        .then(res => {
           if(res.data.insertedId){
               alert("Your Booking Successful.")
               clearing();
            //    customerData();
           }
        //    setCustomer(res.data.insertedId)
        })
        e.preventDefault();
    }
    return (
        <div>
            
                <div className=" text-start ms-md-5 py-md-5 px-md-5">
                <div className="border rounded ps-5 py-5">
                        <h2 className="text-start">Booking Now</h2>
                        <form id="bookingForm" onSubmit={handleBookingInfo}>
                            <input ref={nameRef} type="text" placeholder="Name" className="my-2 w-75 p-1 border-1 rounded fs-5" /> <br />
                            <input type="email" ref={emailRef} placeholder="Email" className="my-2 w-75 p-1 border-1 rounded fs-5"/> <br />
                            <input type="phone number" ref={phoneRef} placeholder="Phone Number" className="my-2 w-75 p-1 border-1 rounded fs-5"/><br />
                            <input type="text" ref={addressRef} placeholder="city,country" className="my-2 w-75 p-1 border-1 rounded fs-5"/><br />
                           
                            <p className="text-start">
                            <label for="cars" >Choose Your Interested Tour Place: </label><br />
                            </p>
                            
                                <select ref={tourRef} className="my-2 w-75 p-1 border-1 rounded fs-5"  name="cars" id="cars">
                                    <option value="Goa Tour">Goa Tour</option>
                                    <option value="Kashmir Tour">Kashmir Tour</option>
                                    <option value="Cox's Bazar">Cox's Bazar</option>
                                    <option value="Nepal Holidays Tour">Nepal Holidays Tour</option>
                                    <option value="Istambul Tour">Istambul Tour</option>
                                    <option value="Italy Tours & Trips">Italy Tours & Trips</option>
                                </select><br />
                            <input type="submit" value="Book Now" className="my-2 w-75 p-1 border-1 rounded fs-5"/> <br />
                        </form>
                    </div>
                </div>
               
           
        </div>
       
    );
};

export default Booking;