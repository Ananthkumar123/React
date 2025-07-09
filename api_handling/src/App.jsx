import { useEffect, useState } from 'react'
import axios from 'axios'
 

function App() {
  const [products, setProducts] = useState([])
  const [error, seterror] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() => {
    const controller = new AbortController()  

   ;(async () => { // iiff
      try {
        setLoading(true)
        seterror(false)
        const response = await axios.get('/api/products?search=' + search, { signal: controller.signal })
        console.log(response.data);
        setProducts(response.data)
        setLoading(false) // we making restart 
      } catch (error) {
        if (axios.isCancel(error)) { // avioding race condition
          console.log('request canceled', error.message);
          return
        }
        seterror(true)
        setLoading(false)


      }
    })() 
    return ()=> controller.abort()
 },[search])


  return (
    <>
      {/* conditional rendering  */}
      {loading && (<h1> loading is going on </h1>)}

      {error && (<h2>error occured </h2>)}

      <h1>api calling</h1>
      <h5>products length is {products.length}</h5>

      <input type="text"  placeholder="search" value={search} onChange={(e)=>setSearch(e.target.value)} />
    </>

  )
}

export default App
