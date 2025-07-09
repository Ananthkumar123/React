import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { authService } from './appwrite/auth'
import {login,logOut } from "./store/authSlice"
import { Footer, Header } from './components/files'
import { Outlet } from 'react-router'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
        
        

  useEffect(() => {
    authService.getCurrentUser()
      .then((data) => {
        if (data) {
          // setLoading(true)
          dispatch(login({data}))
        }
        else {
          dispatch(logOut())
        }
      })
      .finally(()=> setLoading(false))
  }, [])

//conditional rendering  
// if(loading){
//    return <h1> loading...</h1>
// }
// else {
//   return <p> loading sisplays the content </p>
// }
// loading = true  default 
   return !loading ? ( <div> loading is over 

    <div>
      <Header/>
       <Outlet>
        <main></main>
       </Outlet>
      <Footer/>
    </div>
   </div>) : "loading" 
   
   
}

export default App
