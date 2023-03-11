import React from 'react'
import ActiveIcon from "../assets/activeIcon.png"
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
    return (
        <div className='favourite'>
            <div className='favImgContainer'>
                <img className='favProfileIcon' src={icon} />
                <img className='favActiveIcon' src={ActiveIcon} />
            </div>
            <div className="favNameContainer"><span className='favName'>{name}</span></div>
        </div>
    )
}

export default Favourites