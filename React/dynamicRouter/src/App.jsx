// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './pages/Home'
// import User from './pages/User'


// let userRouter = createBrowserRouter([
//     {
//         path : "/",
//         element : <Home />
//     },
//     {
//         path : "/user/:id",
//         element : <User />
//     }
// ])
// const App = () => {
//   return (
//     <RouterProvider router={userRouter}>App</RouterProvider>
//   )
// }

// export default App


// !-- protected route --!

import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './auth/Home'
import Login from './auth/Login'
import Dashboard from './auth/Dashboard'
import Protect from './auth/Protect'

let router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },
  {
    path : '/login',
    element : <Login />
  },
  {
    path : '/dashboard',
    element : (
      <Protect>
      <Dashboard />
      </Protect>
    )
  }
])

const App = () => {

  return (
    <RouterProvider router={router}>
      <h1>App Component</h1>

    </RouterProvider>
  )
}

export default App
