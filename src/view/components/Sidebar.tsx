import React, { useState } from 'react'
import "./Sidebar.css"
import { Settings, MessageSquare } from "react-feather"
const Sidebar = (): JSX.Element => {
  const [showMore, setShowMore] = useState<Boolean>(false)
  const handleShowMore = () => {
    setShowMore(!showMore)
  }
  return (
    <div className='sidebar'>
      <div className="sidebar-top"><MessageSquare style={{ color: '#7269ef' }} /></div>
      <div className="sidebar-bottom">
        <button className='bottom-icons' onClick={handleShowMore}><Settings style={{ color: '#e1e9f1' }} /></button>
        <div className={showMore ? "settings-dropdown open" : "settings-dropdown"}>
          <button>Starred Messages</button>
          <button>Settings</button>
          <button>Log Out</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar