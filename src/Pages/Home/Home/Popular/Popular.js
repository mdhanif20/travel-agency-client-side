import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import "./Popular.css";
const Popular = (props) => {
    const customer = props.customer;
    const {name,img,details,rating,time,totalPerson} = customer;
    // console.log(customer);
    return (
        <div className="card border-0 text-start">
        <img src={img} className="card-img-top w-100" id="popular-Img" alt="..."/>
        <div className="card-body ps-0">
        <h5 className="card-title mb-0">{name}</h5>
        <small className="mb-4">{time} Days Tour </small>
        <p className="card-text">{details.slice(0,90)}....</p>
        <p className="text-bolder fs-5 px-3" id="reting"><span><AiFillStar className="text-warning"/> {rating}</span> <span><BsFillPeopleFill className="text-warning"/> {totalPerson}</span> </p>
        </div>
    </div>
    );
};

export default Popular;