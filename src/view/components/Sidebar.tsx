import React, { useContext, useState } from 'react'
import "./Sidebar.css"
import { Settings, MessageSquare, Moon, Sun } from "react-feather"
import { ThemeContext } from '../../constants/Theme'
const Sidebar = (): JSX.Element => {
  const [showMore, setShowMore] = useState<Boolean>(false)
  const themeProvider = useContext(ThemeContext)
  const handleShowMore = () => {
    setShowMore(!showMore)
  }
  const handleToogle = () => {
    themeProvider?.toggleTheme()
  }
  return (
    <div className='sidebar'>
      <div className="sidebar-top">
        <MessageSquare style={{ color: '#7269ef' }} />
      </div>
      <div className="sidebar-bottom">
        <button className='theme-icon' onClick={handleToogle}>
          {themeProvider?.theme == 'light' ? <Moon style={{ color: '#2b2f32' }} /> : <Sun style={{ color: '#e1e9f1' }} />}</button>
        <button className='setting-button' onClick={handleShowMore}>
          <Settings className='settings-icon' />
        </button>
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