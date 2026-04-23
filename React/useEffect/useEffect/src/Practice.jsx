

import React, { useEffect, useState } from 'react'

const Practice = () => {
    let [show,setShow] = useState(true);
    let[users,setUsers] = useState([]);
    useEffect(()=>{
       let fetchData = async () => {
        try{
            let res = await fetch('https://jsonplaceholder.typicode.com/users')
            let data = await res.json();
            setUsers(data);
        }
        catch{
            console.log('error');
            
        }
       }
       fetchData();
    },[])
  return (
    <div>
      <button onClick={()=>setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      
      {show && users.map((user)=>(
        <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <hr />
        </div>
      ))}
    </div>
  )
}

export default Practice
