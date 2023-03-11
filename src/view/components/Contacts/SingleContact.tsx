import React from 'react'
import ActiveIcon from "../assets/activeIcon.png"
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
    return (
        <span className='singleContact'>
            <span style={{ minWidth: '15%', display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
                <img className="icon" src={icon} />
                <img className='active' src={ActiveIcon} />
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', padding: '2px', width: '85%' }}>
                <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}><strong>{name}</strong></div>
                <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{lastMessage}</div>
            </span>
        </span>
    )
}

export default SingleContact