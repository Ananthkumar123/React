import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom' 
import {Container,Logo,LogoutBtn }   from '../files'
// import Logo from '../files'
// import LogoutBtn from '../files'
 
function Header() {

  const authStatus = useSelector((state)=>state.status) // authSlice
  const navigate = useNavigate()

   const navItems =[
    {
      name : 'Home',
      slug : '/',
      active : true
    },
     {
      name : 'Login',
      slug : '/LogIn',
      active :  !authStatus
    },
     {
      name : 'Signup',
      slug : '/Signup',
      active :   !authStatus
    },
     {
      name : 'All posts',
      slug : '/AllPosts',
      active :  authStatus
    },
     {
      name : 'Add post',
      slug : '/AddPost',
      active : authStatus
    },

   ]
  return (
     <>
    
    <Container className="py-3 shadow bg-gray-500">
      <nav className='flex'>
        <div className='mr-4'>
          <Link  to='/'>
          <Logo width='70px'></Logo>
        </Link>
        </div>
        <ul className='flex ml-auto'>
          {navItems.map((items)=>
          items.active ? (
          <li key= {items.name}>
            <button onClick={()=>navigate(items.slug)}
              className='inline-block px-6 py-2 duration-200
               hover:bg-blue-100 rounded-full '>{items.name}</button>

          </li>) : null )}
          {authStatus && (
            <li>
              <LogoutBtn/>
            </li>
          )}
        </ul>
      </nav>
    </Container>
     </>
  )
}

export default Header