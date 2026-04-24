import React from 'react'
import GrandChild from './GrandChild'

const Child = ({name}) => {
    console.log(name);
    
  return (
    <div>
      <h1>Child Component</h1>
      <GrandChild name={name}/>
    </div>
  )
}

export default Child
