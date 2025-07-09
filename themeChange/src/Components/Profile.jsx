import React from 'react'
import Usercontext from '../context/Usercontext'
import { useContext } from 'react'
function Profile() {

    const {user} = useContext(Usercontext)

    if(!user) return <div>  plse login  </div>

     return <div>welcome {user.username}</div>
}

export default Profile