import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Fotter'
function Layout() {
  return (
     <>
     <Header/>  
     <Outlet/>
     <Footer/>
    </>
  )
}

export default Layout