import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>

      <Link to="profile">Profile</Link> | 
      <Link to="contact">Contact</Link>

      <hr />
      <Outlet />
    </div>
  )
}

export default Dashboard