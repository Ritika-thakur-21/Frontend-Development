// import React from 'react'
// import { Link, NavLink, Route, Routes } from 'react-router'
// import Contact from './pages/Contact'
// import Home from './pages/Home'
// import About from './pages/About'
// import PageNotFound from './pages/PageNotFound'

// const App = () => {


//   return (
//     <div>
//          <nav>
//          <Link to ="/">Home | </Link>
//          <Link to ="/about">About | </Link>
//          <Link to ="/contact">Contact |</Link>
//          </nav>

//          <nav>
//             <NavLink to = '/' className='menu'>Home</NavLink>
//             <NavLink to = '/about' className='menu'>About</NavLink>
//             <NavLink to = '/contact' className='menu'>Contact</NavLink>
//          </nav> <hr />
//       <Routes>
//         <Route path="/" element = <Home/> />
//         <Route path="/about" element = <About/> />
//         <Route path="/contact" element = <Contact/> />
//         <Route path="*" element = <PageNotFound/> />
//       </Routes>
//     </div>
//   )
// }

// export default App



// !---- Nested Routes ----!

import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from './nestedPages/Dashboard'
import Profile from './nestedPages/Profile'
import Setting from './nestedPages/Setting'
import Home from './nestedPages/Home'

const App = () => {
  return (
    <div>
      <Routes>  
        <Route path='/' element=<Home/> />
        <Route path='/dashboard' element= <Dashboard/> >
        <Route path='profile' element= <Profile/> />
        <Route path='setting' element= <Setting/> />

        </Route>
      </Routes>
    </div>
  )
}

export default App

