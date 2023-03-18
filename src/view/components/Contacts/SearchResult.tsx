import React, { useContext } from 'react'
import { ChatContext } from '../../../constants/Chat'
import "./SearchResult.css"

interface SearchResultProps {
  data: {
    name: String,
    icon: string
  }
}

const SearchResult = (props: SearchResultProps) => {
  const { data } = props
  const { name, icon } = data
  const chatContext = useContext(ChatContext)
  const handleChat = () => {
    chatContext?.setChat(name, icon)
  }
  return (
    <div className='search-contact' onClick={handleChat}>
      <img src={icon} className="search-profile-img" />
      <div className="search-profile-name">{name}</div>
    </div>
  )
}

export default SearchResult