import React from 'react';
import useFirebase from './../Firebase/useFirebase';
import { FcGoogle } from 'react-icons/fc';
import "./LogIn.css";
const Login = () => {
    const {singInUsingGoogle} = useFirebase();
    return (
        <div id="loginForm" className="m-auto p-3 rounded border my-5">
            <h2 className="pb-3">Sing In</h2>
            <form action="">
                <input type="text" placeholder="Name" className="w-100 border rounded my-1" /> <br />
                <input type="password" className="w-100 border rounded my-1"  placeholder="Password" /> <br />
                <input type="password" className="w-100 border rounded my-1" placeholder="re-type password" /> <br />
                <input type="submit" className="w-100 border rounded my-1 fw-bolder" value="Sing In" /> 
            </form>
            <p className="my-3">--------Or--------</p>
            <button onClick={singInUsingGoogle} className="btn fs-5 border w-100"><FcGoogle className="fs-4"/> Google Sing In</button>
        </div>
    );
};

export default Login;