import React, { useState } from 'react';
import Login from './view/pages/Login';
import Main from './view/pages/Main';
import { ThemeContext } from './constants/Theme';
import Register from './view/pages/Register';

function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme((cur) => cur === "light" ? "dark" : "light")
  }
  return (
    // <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Main />
    // {/* </ThemeContext.Provider> */}
    // <Login/>
    // <Register/>
  );
}

export default App;
