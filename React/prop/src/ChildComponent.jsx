import React from 'react'

const ChildComponent = (props) => {
  console.log(props);
  
  let { uname, age, image, arr } = props;
  console.log(arr)
  return (
    <div>
      <h1>Im the child</h1>
      <h2>My parent : {uname}</h2>
      <h1>My age: {age}</h1>
      <img src={image} alt="profile" />
      <array></array>
      <ul>
      {
        arr.map((a, index) => {
          return <li key={index}>{a}</li>
        })
      }
      </ul>

    </div>
  )
}

export default ChildComponent