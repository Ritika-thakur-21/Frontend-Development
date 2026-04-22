import React from 'react'
import { Link } from 'react-router'

const PageNotFound = () => {
  return (
    <div>
      <h1>404 PageNotFound component</h1>
      <Link to='/'>Back To HomePage</Link>
    </div>
  )
}

export default PageNotFound
