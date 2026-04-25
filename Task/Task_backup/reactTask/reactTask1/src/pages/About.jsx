import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About Page</h1>

      <Link to="dashboard">Go to Dashboard</Link>

      <hr />
      <Outlet />
    </div>
  )
}

export default About