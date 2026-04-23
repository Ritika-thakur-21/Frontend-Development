import React, { useState } from 'react'

// const App = () => {
//     let [count, updateFunction] = useState(0)

//     let increment = () => {
//         updateFunction(count + 1)
//     }

//     let decrement = () => {
//         updateFunction(count > 0 ? count - 1 : count)
//     }

//     return (
//         <div>
//             App
//             <br /><br />
//             <h1>{count}</h1>

//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }


// const App = () => {
//     let list = ['subodh', 'vishnu', 'sai']
//     let [users, setUsers] = useState(list)

//     console.log(users)

//      const addUser = () => {
//         setUsers([...users, 'saurabh'])
//     }

//     return (
//         <div>
//              <button onClick={addUser}>Add</button>
//             <ul>
//                 {users.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// !-- passing object 
// const App = () => {

//     let [user, setUser] = useState({
//         username: 'nox',
//         marks: 22,
//         job: 'wilted'
//     })

//     let updateMarks = ()=>{
//         setUser({...user, marks: (user.marks+10)})
//     }
//     console.log(user)

//     return (

//          <>
//          <button onClick={updateMarks}>add 10 marks</button>
//         <h2>{user.username}</h2>
//         <h2>{user.marks}</h2>
//         <h2>{user.job}</h2>
//     </>

//     )
// }

// !-- passing null

// const App = ()=>{
//     let [user, setUser] = useState(null)
//     console.log(user);
//     let updateValue = ()=>{
//         setUser('Meow')
//     }

//     return (
//         <>
//             {
//                 user?<h1>{user}</h1>: <h1> empty </h1>
//             }
//             <button onClick={updateValue}>update</button>
//         </>
//     )
// }

// export default App; 

// !-- 


export const App = () => {
    let [role, setRole] = useState('guest')
    // let printrole = () => {
    //     if (user == 'guest')
            
    // }
    return (
        <div>App
            <button onClick={() => setRole("guest")}>guest</button>
            <button onClick={() => setRole("user")}>user</button>
            <button onClick={() => setRole("admin")}>admin</button>


            {role === 'admin' && <h1>you are admin</h1>}
            {role === 'guest' && <h1>you are guest</h1>}
            {role === 'user' && <h1>You are user</h1>}
        </div>
    )
}

export default App;