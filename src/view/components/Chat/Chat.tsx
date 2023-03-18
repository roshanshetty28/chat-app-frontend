import React, { useContext, useState } from 'react'
import "./Chat.css"
import { MoreVertical } from "react-feather"
import Welcome from "./Welcome"
import Middle from './Middle'
import Bottom from "./Bottom"
import { ChatContext } from '../../../constants/Chat'

const Chat = (): JSX.Element => {
  const contact = useContext(ChatContext)
  const [showMore, setShowMore] = useState<Boolean>(false)
  const handleShowMore = () => {
    setShowMore(!showMore)
  }
  return (
    <div className='chat'>
      {contact?.chat.name === "" ? <Welcome /> : <>
        <div className="top">
          <div className="top-left">
            <img src={contact?.chat.profile} className="chat-profile-img" />
            <div className="chat-profile-name"><strong>{contact?.chat.name}</strong></div>
          </div>
          <div className="top-right">
            <div className={showMore ? "dropdown open" : "dropdown"}>
              <button>Pin Contact</button>
              <button>Clear Chat</button>
              <button>Block</button>
              <button>Report</button>
            </div>
            <button className='more-button' onClick={handleShowMore}><MoreVertical className='more-icon' /></button></div>
        </div>
        <Middle />
        <Bottom />
      </>}
    </div>
  )
}

export default Chat