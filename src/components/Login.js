import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/Login.css'

async function loginUser(credentials) {
    return fetch('http://localhost:5000/login', { 
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function login({ setToken }) {

}

const Login = ({ setToken }) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginuser({ 
            username,
            password
        })
        setToken(token)
    }
    return (
        <div className="login-wrapper">
            <h1>Please Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
}

export default Login
