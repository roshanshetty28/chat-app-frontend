import React, { useState } from 'react';
import Login from './view/pages/Login';
import Main from './view/pages/Main';
import { ThemeContext, themeType } from './constants/Theme';
import { contactType, ChatContext } from './constants/Chat'
import Register from './view/pages/Register';

function App() {
  // theme context
  const [theme, setTheme] = useState<themeType>('dark')
  const toggleTheme = () => {
    setTheme((cur) => cur === "light" ? "dark" : "light")
  }
  // chat context
  const [chat, setContact] = useState<contactType>({name:"",profile:""})
  const setChat = (name: String,icon:string) => {
    setContact({...chat,name:name,profile:icon})
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ChatContext.Provider value={{ chat, setChat }}>
        <div id={theme}>
          <Main />
        </div>
      </ChatContext.Provider>
    </ThemeContext.Provider >
    // <Login/>
    // <Register/>
  );
}

export default App;
