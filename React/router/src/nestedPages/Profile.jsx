import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

const Profile = () => {
    let [users,setUser] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>setUser(res.data))
         .catch((err)=>console.log(err))
    },[])
  return (
    <div>
      <h1>Profiles</h1>
      {
        users.map((u)=>(
            <p key={u.id}>{u.name}</p>
        ))
      }
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default Profile
