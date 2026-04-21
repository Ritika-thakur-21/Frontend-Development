import React, { useState } from 'react'

const App = () => {
    let [data, setData] = useState({
        username : '',
        password : ''
    })
    let handleChange = (e) => {
        // console.log(e.target.value);
        let{name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
  return (
    <div>
      <form action="">
        <input type="text" name='username' id='username' value={data.username} placeholder='username' onChange={handleChange}/> <br /><br />
      <input type="text" name='password' id='password' value={data.password} placeholder='password' onChange={handleChange}/> <br /><br />
      Male <input type="radio" name="gender" id="" value='Male' onChange={handleChange}/>
      Female <input type="radio" name="gender" id="" value='Female' onChange={handleChange}/>
      </form>
      <hr />
        <h1>Username : {data.username}</h1>
        <h1>Password : {data.password}</h1>
    </div>
  )
}

export default App
