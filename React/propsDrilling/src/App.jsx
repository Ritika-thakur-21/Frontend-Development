
import React from 'react'
import Parent from './pages/Parent'

const App = () => {
    let username = "Ritika";


  return (
    <div>
      <h1>App Component</h1>
      <Parent name = {username}/>
    </div>
  )
}

export default App
