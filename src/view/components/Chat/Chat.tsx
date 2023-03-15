import React, { useState } from 'react'
import "./Chat.css"
import Image from "../../../assets/logo512.png"
import { MoreVertical } from "react-feather"
import Welcome from "./Welcome"
import Middle from './Middle'
import Bottom from "./Bottom"

const Chat = (): JSX.Element => {
  const [showMore, setShowMore] = useState<Boolean>(false)
  const [showChat, setShowChat] = useState<Boolean>(false)
  const handleShowMore = () => {
    setShowMore(!showMore)
  }
  const handleShowChat = () => {
    setShowChat(!showChat)
  }
  return (
    <div className='chat'>
      {showChat ? <Welcome /> : <>
        <div className="top">
          <div className="top-left">
            <div className="chat-profile-img">
              <img src={Image} />
            </div>
            <div className="chat-profile-name">rosh</div>
          </div>
          <div className="top-right">
            <div className={showMore ? "dropdown open" : "dropdown"}>
              <button>Clear Chat</button>
              <button>Block</button>
              <button>Report</button>
            </div>
            <button className='more-button' onClick={handleShowMore}><MoreVertical style={{ color: '#e1e9f1' }} /></button></div>
        </div>
        <Middle/>
        <Bottom />
      </>}
    </div>
  )
}

export default Chat