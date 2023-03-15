import React, { useState } from 'react'
import "./Register.css"
import { User, Lock, Mail } from "react-feather"

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = () => {
        console.log({ username, password });
    }
    return (
        <div className='login'>
            <div className='login-card'>
            <div className="box">
                    <div className="label">Email</div>
                    <div className="i-input">
                        <div className="icon"><Mail style={{ color: '#a6b0cf' }} /></div>
                        <input type="email" placeholder='Enter Email' />
                    </div>
                </div>
                <div className="box">
                    <div className="label">Username</div>
                    <div className="i-input">
                        <div className="icon"><User style={{ color: '#a6b0cf' }} /></div>
                        <input type="email" placeholder='Enter Username' />
                    </div>
                </div>
                <div className="box">
                    <div className="label">Password</div>
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
                    <button className='submit-btn'>Sign up</button>
                </div>
            </div>
            <div className="signup">
                <span>Already have an account?</span><a href="#">Login</a>
            </div>
        </div>
    )
}

export default Register