// import React, { useState } from 'react'

// const App = () => {
//     let [count, setCount] = React.useState(0)
//     console.log(count);
    
//     let increment = () => {
//         setCount(count + 1)
//     }
//     let decrement = () => {
//       if(count > 0){
//         setCount(count - 1)
//     }
//   }
//     let reset = () => {
//         setCount(0)
//     }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default App


// ! ----------- passing array

// import { useState  } from "react";

// import React from 'react'

// const App = () => {
//   let users = ['subodh','vishnu','sai']
//   let [name,setName] = useState(users);
//   console.log(name);
  
//   let setUser = ()=>{
//     setName([...name,'ritika'])
//   }
//   return (
//     <div>
//       <ul>
//         {
//           name.map((item,index)=>(
//             <li key={index}>
//               {item}
//             </li>
//           ))
//         }
//       </ul>
//       <button onClick={setUser}>Add Users</button>
//     </div>
//   )
// }

// export default App


// !-------------- passing Object

// import React, { useState } from 'react'

// const App = () => {
//   let [user,setUser] = useState({
//     username: 'ritika',
//     marks: 90
//   })
//   console.log(user);
  
//   let updateMarks = () => {
//     setUser({...user, marks: user.marks + 10})
//   }
//   return (
//     <div>
//       <h2>{user.username} {user.marks}</h2>
//       <button onClick={updateMarks}>Increase Marks</button>
//     </div>
//   )
// }

// export default App




// !--------- pass null as state

// import React, { useState } from 'react'

// const App = () => {
//  let [data,setData] = useState(null)
//   console.log(data);
  
//   return (
//     <div>
//       {
//         data?<h3>{data}</h3>: <h3>No Data</h3>
//       }
//       <button onClick={()=>setData('Data Loaded...')}>Change</button>
//     </div>
//   )
// }

// export default App



// import React, { useState } from "react";

// const Product = () => {
//   const [quantity, setQuantity] = useState(0);

//   const product = {
//     name: "Headphones",
//     price: 999,
//     image: "data:image/jpeg;base64,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"
//   };

//   const increase = () => {
//     setQuantity(prev => prev + 1);
//   };

//   const decrease = () => {
//     setQuantity(prev => (prev > 0 ? prev - 1 : 0));
//   };

//   return (
//     <div style={styles.card}>
//       <img src={product.image} alt={product.name} style={styles.image} />

//       <h2>{product.name}</h2>
//       <h3>₹ {product.price}</h3>

//       <div style={styles.counter}>
//         <button onClick={decrease}>➖</button>
//         <span>{quantity}</span>
//         <button onClick={increase}>➕</button>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   card: {
//     width: "250px",
//     margin: "50px auto",
//     padding: "20px",
//     textAlign: "center",
//     border: "1px solid #ddd",
//     borderRadius: "10px",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
//   },
//   image: {
//     width: "100%",
//     height: "150px",
//     objectFit: "cover"
//   },
//   counter: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "10px",
//     marginTop: "10px"
//   }
// };

// export default Product;




// !--------- 

// import React, { useState } from 'react'

// const App = () => {
//   let [role, setRole] = useState('guest')
//   console.log(role);
  
//   return (
//     <div>
//       <button onClick={()=>setRole("guest")}>Guest</button>
//       <button onClick={()=>setRole("admin")}>Admin Login</button>
//       <button onClick={()=>setRole("user")}>User Login</button>
//       {
//         role==='guest' && <h1>You are guest!</h1>
//       }
//       {
//         role === 'user' && <h1>You are User!</h1>
//       }
//       {
//         role === 'admin' && <h1>You are Admin!</h1>
//       }
//     </div>
//   )
// }

// export default App



