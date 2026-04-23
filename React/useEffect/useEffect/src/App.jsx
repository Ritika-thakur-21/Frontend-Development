// import React, { useEffect, useState } from 'react'

// const App = () => {
//     let [count,setCount] = useState(0);
//     console.log('component mounted...');
    
//     useEffect(()=>{
//         console.log('effect run');
//         alert('are u sure');
//     },[count])
//   return (
//     <div>
//         <h1>{count}</h1>
//       <button onClick={()=>{setCount(count+1)}}>increase</button>
//     </div>
//   )
// }

// export default App



// !-----

// import React, { useEffect, useState } from 'react'

// const App = () => {

//     let[count,setCount] = useState(0);
//     let [users, setUsers] = useState([]);

//     useEffect(()=>{
//         let fetchUsers = async () => {
//             try{
//                 let res = await fetch('https://jsonplaceholder.typicode.com/users')
//                 let data = await res.json();
//                 setUsers(data);
//             }
//             catch(error){
//                 console.log(error);
//             }
//         }

//         fetchUsers(); // function call
//     },[])

//   return (
//     <div>
//         <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>click</button>

//        <h2>Users List</h2>

//         {
//             users.map((user) => (
//                 <div key={user.id}>
//                     <p>Name: {user.name}</p>
//                     <p>Email: {user.email}</p>
//                     <hr />
//                 </div>
//             ))
//         }
//     </div>
//   )
// }

// export default App



// !-- 

// import React, { useState } from 'react'
// import Child from './Child';

// const App = () => {
//     let[show,setShow] = useState(true);

//   return (
//     <div>
//       <button onClick={()=>setShow(!show)}>
//         {show? 'Hide Child' : 'Show Child'}
//       </button>
//       {show && <Child/>}
//     </div>
//   )
// }

// export default App


// !---- Practice


// import React from 'react'
// import Practice from './Practice'

// const App = () => {
//   return (
//     <div>
//       <h1>My App</h1>
//       <Practice />
//     </div>
//   )
// }

// export default App



// !------------- axios

// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const App = () => {
//     let[user,setUser] = useState([]);

//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>setUser(res.data))
//         .catch((err)=>console.log(err))
//     },[])

//   return (
//     <div>
//       {
//         user.map((u)=>(
//             <p key={u.id}>{u.name}</p>
//         ))
//       }
//     </div>
//   )
// }

// export default App



// !--- with async await

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

    let [user,setUser] = useState([]);

    useEffect(()=>{
        let fetchData = async ()=>{
           try{ let res = await axios.get('https://jsonplaceholder.typicode.com/users')
                setUser(res.data)
           }
           catch(error){
            console.log(error);
           }
        }
        fetchData();
    },[])
  return (
    <div>
      App
    </div>
  )
}

export default App
