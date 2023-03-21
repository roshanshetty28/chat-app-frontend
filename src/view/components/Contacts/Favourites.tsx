import React, { useContext } from 'react'
import ActiveIcon from "../../../assets/activeIcon.png"
import { ChatContext } from '../../../constants/Chat'
import "./Favourites.css"

interface FavouritesProps {
    data: {
        name: String,
        icon: string
    }
}

const Favourites = (props: FavouritesProps): JSX.Element => {
    const { data } = props
    const { name, icon } = data
    const chatContext=useContext(ChatContext)
    const handleChat=()=>{
        chatContext?.setChat(name,icon)
    }
    return (
        <div className='favourite' onClick={handleChat}>
            <div className='favImgContainer'>
                <img className='favProfileIcon' src={icon} />
                <div className="active-sign favActiveIcon"></div>
            </div>
            <div className='favNameContainer'>
                <span className='favName'>{name}</span>
            </div>
        </div>
    )
}

export default Favourites