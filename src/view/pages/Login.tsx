import React, { useState } from 'react'

const Login = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit = () => {
        console.log({ username, password });
    }
    return (
        <div>
            <div>
                <label>Username:</label>
                <input value={username} name="username" onChange={(e)=>setUsername(e.target.value)}></input>
            </div>
            <div>
                <label>Password:</label>
                <input value={password} name="password" onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Login