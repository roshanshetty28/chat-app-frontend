import React, { useState } from 'react'
import "./Login.css"
import { User, Lock } from "react-feather"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = () => {
        console.log({ username, password });
    }
    return (
        <div className='login'>
            <div className='login-card'>
                <div className="box">
                    <div className="label">Username</div>
                    <div className="i-input">
                        <div className="icon"><User style={{ color: '#a6b0cf' }} /></div>
                        <input type="email" placeholder='Enter Email' />
                    </div>
                </div>
                <div className="box">
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} className="label">
                        <label >Password</label><label >Forgot password?</label>
                    </div>
                    <div className="i-input">
                        <div className="icon"><Lock style={{ color: '#a6b0cf' }} /></div>
                        <input type="password" placeholder='Enter Password' />
                    </div>
                </div>
                <div className="remember-me">
                    <input type="checkbox" />
                    <label style={{ color: '#a6b0cf' }}>Remember Me</label>
                </div>
                <div className="submit">
                    <button className='submit-btn'>Sign in</button>
                </div>
            </div>
            <div className="signup">
                <span>Don't have an account?</span><a href="#">Register</a>
            </div>
        </div>
    )
}

export default Login