import React, { useContext } from 'react'
import ActiveIcon from "../../../assets/activeIcon.png"
import { ChatContext } from '../../../constants/Chat'
import "./SingleContact.css"

interface ContactProps {
    data: {
        name: String,
        lastMessage: String,
        icon: string
    }
}

const SingleContact = (props: ContactProps): JSX.Element => {
    const { data } = props
    const { name, lastMessage, icon } = data
    const chatContext=useContext(ChatContext)
    const handleChat=()=>{
        chatContext?.setChat(name,icon)
    }
    return (
        <span className='singleContact' onClick={handleChat}>
            <span style={{ minWidth: '15%', display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
                <img className="icon" src={icon} />
                <img className='active' src={ActiveIcon} />
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', padding: '2px', width: '85%' }}>
                <div className='single-contact-name'><strong>{name}</strong></div>
                <div className='single-contact-lastMsg'>{lastMessage}</div>
            </span>
        </span>
    )
}

export default SingleContact