import React, { Children } from 'react'
import Usercontext from './Usercontext'
 import { useState } from 'react'


function UsercontextProvide({ children }) {
  const [user, setUser] = useState('')

  return (
    <Usercontext.Provider value={{ user, setUser }}>
      {children}
    </Usercontext.Provider>
  )
}

export default UsercontextProvide
