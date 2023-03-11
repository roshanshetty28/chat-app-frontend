import React from 'react'
import "./Chat.css"
import Image from "../assets/logo512.png"
const Chat = ():JSX.Element => {
  return (
    <div className='chat'>
      <div className="top">Top</div>
      <div className="middle">Middle</div>
      <div className="bottom">
        <div className="left">Left</div>
        <div className="center"><input placeholder='Type your message...'/></div>
        <div className="right"><button>Send</button></div>
      </div>
    </div>
  )
}

export default Chat