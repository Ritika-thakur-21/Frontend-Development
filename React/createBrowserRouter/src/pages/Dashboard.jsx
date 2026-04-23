import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to = 'profile'>Profile | </Link>
      <Link to = 'contact'>Contact</Link>
      <hr />
      <Outlet />
    </div> 
  )
}

export default Dashboard
