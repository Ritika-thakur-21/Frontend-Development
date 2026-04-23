import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
      <Link to='/dashboard'>Go to Dashboard</Link>
      <h1>Home</h1>
    </div>
  )
}

export default Home
