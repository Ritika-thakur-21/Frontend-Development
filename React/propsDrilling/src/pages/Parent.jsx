import React from 'react'
import Child from './Child'

const Parent = ({name}) => {
    // console.log(prop);
    // let {name} = prop;
    console.log(name);
    
  return (
    <div>
      <h1>Parent Component</h1>
      <Child name={name} />
    </div>
  )
}

export default Parent
