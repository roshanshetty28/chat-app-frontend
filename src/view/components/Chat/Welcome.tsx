import React from 'react'
import "./Welcome.css"
import Image from "../../../assets/logo512.png"

const Welcome = (): JSX.Element => {
    return (
        <div className='welcome'>
            <div className="container">
                <div className="welcome-icon">
                    <img src={Image}/>
                </div>
                <div className="header">
                    Welcome, rosh
                </div>
                <div className="text">
                    Please select a chat to start messaging
                </div>
            </div>
        </div>
    )
}

export default Welcome