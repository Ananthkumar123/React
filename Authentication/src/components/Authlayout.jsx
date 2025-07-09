import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Authlayout({children,authentication=true}) {

    const navigate =useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state =>state.auth.status)  // reducer
    console.log(authStatus,"authstatus")
 
    // let authvalue = authStatus === true ? true: false
    useEffect(()=>{
            // true        && false        !== true  ==> true && true 
        if(authentication && authStatus !== authentication){
            navigate('/LogIn')
                    // false       && false     !==  true ==> false && false
        } else if(!authentication && authStatus !== authentication){
            navigate('/')
        }
         setLoader(false)
    },[authStatus,navigate,authentication])


  return (
    loader? <h1>loading...</h1> :<>{children} </>
      )
}

export default Authlayout