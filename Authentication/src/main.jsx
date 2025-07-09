import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Authlayout from './components/Authlayout.jsx'
import LogIn from './pages/Login.jsx'
import {HomePage} from './components/files.js'
import Signup from './components/Signup.jsx'
import AllPosts from './pages/AllPosts.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'


const Router = createBrowserRouter([
  {
   path:'/',
   element : <App/>,
   children :[
      {
         path :'/',
         element :<HomePage/>
      },
      {
        path : '/login',
        element: (
          <Authlayout authentication = {false}>
            <LogIn/>
          </Authlayout>
        )
      },
      {
            path: "/signup",
            element: (
                <Authlayout authentication={false}>
                    <Signup />
                </Authlayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <Authlayout authentication>
                    {" "}
                    <AllPosts />
                </Authlayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <Authlayout authentication>
                    {" "}
                    <AddPost />
                </Authlayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <Authlayout authentication>
                    {" "}
                    <EditPost />
                </Authlayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },

   ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

      <RouterProvider router={Router}>
        <App />
      </RouterProvider>

    </Provider>
  </StrictMode>,
)
