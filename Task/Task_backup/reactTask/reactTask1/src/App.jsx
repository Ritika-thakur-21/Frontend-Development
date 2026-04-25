import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import User from './pages/User'
import Profile from './pages/Profile'
import Contact from './pages/Contact'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
          children: [
            {
              path: "profile",
              element: <Profile />
            },
            {
              path: "contact",
              element: <Contact />
            }
          ]
        }
      ]
    },
    {
      path: "/user/:id",
      element: <User />
    }
  ])

  return <RouterProvider router={router} />
}

export default App