import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'


let userRouter = createBrowserRouter([
    {
        path : "/",
        element : <Home />
    },
    {
        path : "/user/:id",
        element : <User />
    }
])
const App = () => {
  return (
    <RouterProvider router={userRouter}>App</RouterProvider>
  )
}

export default App
