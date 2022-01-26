import axios from "axios";

import React, { useState } from "react";
import { useHistory } from "react-router";

const Login = () => {
    const { push } = useHistory();
    const [login, setLogin] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', login)
        .then(resp => {
            localStorage.setItem('token', resp.data.token);
            push('/friends');
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input onChange={handleChange} name='username' id='username'/>
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input onChange={handleChange} name='password' type='password' id='password'/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;