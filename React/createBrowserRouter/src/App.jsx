import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Contact from './pages/Contact'

let router1 = createBrowserRouter([
    {
        path : '/',
        element : <Home/>,
        children : [
            {
                path : 'dashboard',
                element : <Dashboard/>,
                children : [
                    {
                        path : 'profile',
                        element : <Profile/>
                    },
                    {
                        path : 'contact',
                        element : <Contact/>
                    }
                ]
            }
        ]
       },
    {
        path : '/about',
        element : <About />
    }
    
])



const App = () => {
  return (
    
    <RouterProvider router={router1}>App</RouterProvider>
  )
}

export default App
