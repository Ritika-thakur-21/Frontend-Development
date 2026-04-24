import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Home = () => {
    let {theme} = useContext(ThemeContext)
  return (
    <div>
      <h1 className='bg-red-200'>Home Page</h1>
      <p>Theme : {theme}</p>
    </div>
  )
}

export default Home
