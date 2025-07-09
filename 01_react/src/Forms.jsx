import React, { useState } from 'react'

function Forms() {

    const [data, setData] = useState("")
    const [ newData ,newSetdata] =useState()

    const getData = (e) => {
        
        setData(e.target.value)
    }

  const submitData =(e)=>{
   e.preventDefault()
    newSetdata(data)
  }
    return (
        <div>

            
            {/* <input type='text'  onChange={getData}/>
            <button className='btn btn-primary'  onClick={submitData}> click</button>
            <h4>{newData}</h4> */}

            <form action="" onClick={submitData}>
                 <input type='text'  onChange={getData}/>
            <button className='btn btn-primary'  type='submit'> click</button>
            <h4>{newData}</h4>
            </form>
        </div>

    )
}

export default Forms