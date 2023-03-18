import React, { useState } from 'react';
import Login from './view/pages/Login';
import Main from './view/pages/Main';
import { ThemeContext, themeType } from './constants/Theme';
import Register from './view/pages/Register';

function App() {
  const [theme, setTheme] = useState<themeType>('light')
  const toggleTheme = () => {
    setTheme((cur) => cur === "light" ? "dark" : "light")
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
      <Main />
      </div>
    </ThemeContext.Provider>
    // <Login/>
    // <Register/>
  );
}

export default App;
