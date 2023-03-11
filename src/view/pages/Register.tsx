import React, { useState } from 'react'

const Register = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = () => {
        console.log({ name, username, password });
    }
    return (
        <div>
            <div>
                <label>Name:</label>
                <input value={name} name="username" onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
                <label>Username:</label>
                <input value={username} name="username" onChange={(e) => setUsername(e.target.value)}></input>
            </div>
            <div>
                <label>Password:</label>
                <input value={password} name="password" onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Register