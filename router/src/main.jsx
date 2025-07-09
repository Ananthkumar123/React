import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from "react-router-dom"
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import Contact from './components/Contact/contact.jsx'
import Git from './components/Github/Git.jsx'
import User from './components/User/user.jsx'

// const router = createBrowserRouter([ //
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       },
//       { path: 'about', element: <About /> }

//     ]

//   }
// ])

const router = createBrowserRouter( // import Route
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path ='' element={<Home/>}/>
        <Route path='About' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='git' element={<Git/>} />
        < Route path='user/:userid' element={<User/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />


)
