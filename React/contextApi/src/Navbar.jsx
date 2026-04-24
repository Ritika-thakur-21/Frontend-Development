import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import ThemeProvider from './ThemeProvider'

const Navbar = () => {
    let {theme,toggleTheme}=useContext(ThemeContext)

  return (
    <div style={{
        padding : '20px',
        background : theme === 'light' ? '#eee' : '#333',
        color : theme === 'light' ? '#333' : '#eee'
    }}>
      <h1>Navbar</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Navbar
