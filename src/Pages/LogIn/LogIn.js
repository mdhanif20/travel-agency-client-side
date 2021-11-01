import React from 'react';
import useFirebase from './../Firebase/useFirebase';

const Login = () => {
    const {singInUsingGoogle} = useFirebase();
    return (
        <div>
            <h2>Login</h2>
            <form action="">
                <input type="text" placeholder="Name" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="re-type password" />
                <input type="submit" value="Sing In" />
            </form>
            <button onClick={singInUsingGoogle} className="btn btn-primary fw-bolder">Sing In</button>
        </div>
    );
};

export default Login;