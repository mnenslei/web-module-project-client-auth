import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddFriend = () => {
    const { push } = useHistory();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        const token = localStorage.getItem('token')
        e.preventDefault();
        axios.post('http://localhost:9000/api/friends', formData, {
            headers: {
                authorization: token
            }
        })
        .then(resp => {
            push('/friends');
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <h2>Add Friend</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input onChange={handleChange} name='name' id='name'/>
                </div>

                <div>
                    <label htmlFor='age'>Age:</label>
                    <input onChange={handleChange} name='age' id='age'/>
                </div> 

                <div>
                    <label htmlFor='email'>Email:</label>
                    <input onChange={handleChange} name='email' id='email'/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    ) 
}

export default AddFriend;