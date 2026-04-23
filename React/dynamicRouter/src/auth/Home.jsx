import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to='/dashboard'>Go to Dashboard</Link>
    </div>
  )
}

export default home
