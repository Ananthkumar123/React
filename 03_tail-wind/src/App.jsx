import { useState } from 'react'


function App() {
  const [color, setColor] = useState('olive')

  return (

    <div className='w-full h-screen'
     style={{backgroundColor:'olive'}}>

      <div className='fixed flex flex-wrap bottom-34   px-2 gap-3' >
        <button className='px-3 py-4 rounded-2xl bg-amber-300 px-2 py-2'> yellow </button>
         <button className='px-3 py-4 rounded-2xl bg-green-500 px-2 py-2'> green </button>
        <button className='px-3 py-4 rounded-2xl bg-red-800 px-2 py-2'> red </button>
      

      </div>
    </div>
  )
}

export default App
