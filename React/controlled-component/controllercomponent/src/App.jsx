import React, { useState } from 'react'

const App = () => {
    let [data, setData] = useState({
        username : '',
        password : '',
        gender : '',
        skills : [],
        option : '',
        message : ''
    })
    let handleChange = (e) => {
        // console.log(e.target.value);
        let{name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }

    // !-- handlecheckbox

    let handleCheckBox = (e) => {
      console.log(e);
      
      let {value, checked} = e.target

      setData({...data,skills : checked ? [...data.skills, value] : data.skills.filter((skill) => skill !== value)})

    }

    // !-- handle select
    let [opt, setOpt] = useState('')
    let handleSelect = (e) => {
      console.log(e);
    }

  return (
    <div>
      <form action="">
        <input type="text" name='username' id='username' value={data.username} placeholder='username' onChange={handleChange}/> <br /><br />
      <input type="text" name='password' id='password' value={data.password} placeholder='password' onChange={handleChange}/> <br /><br />
      Male <input type="radio" name="gender" id="" value='Male' onChange={handleChange}/>
      Female <input type="radio" name="gender" id="" value='Female' onChange={handleChange}/> <br /><br />

      HTML<input type="checkbox" name="skills" id="" value='html' onChange={handleCheckBox} />
      CSS<input type="checkbox" name="skills" id="" value='css' onChange={handleCheckBox} /> <br /><br />
      
      <select name="option" id="" onChange={handleChange} value={data.option}>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
      </select> <br /><br />
      <textarea name="message" id="" value={data.message} onChange={handleChange}></textarea>
      </form>
      <hr />
        <h1>Username : {data.username}</h1>
        <h1>Password : {data.password}</h1>
        <h1>Gender : {data.gender}</h1>
        <h2>Skills : {data.skills.join(' , ')}</h2>
        <h3>Location : {data.option}</h3> 
        <p>Message : {data.message}</p>
    </div>
  )
}

export default App