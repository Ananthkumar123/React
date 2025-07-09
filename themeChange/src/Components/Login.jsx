import React, { useContext,useState } from 'react'
import Usercontext from '../context/Usercontext'


function Login() {
const [username, setusername] = useState('')
const [password,  setPassword  ] = useState('')


const {setUser} = useContext(Usercontext)
const  handelclick = (e)=>{
    e.preventDefault()
    setUser({username,password})
}


  return (
    <div>
        <input type='text' placeholder='enter text' value={username} 
         onChange={(e)=>setusername(e.target.value)}/>

         
        <input type='text' placeholder='enter password' value={password} 
         onChange={(e)=>setPassword(e.target.value)}/>

         <button type='submit' onClick={handelclick}>submit</button>
    </div>
  )
}

export default Login