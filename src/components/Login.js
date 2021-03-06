import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/Login.css'

async function loginUser(credentials) {
    //node server.js to run server
    return fetch('http://localhost:5000/login', { 
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const Login = ({ setToken }) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginUser({ 
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
