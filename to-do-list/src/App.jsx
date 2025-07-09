import { useState } from 'react'
import { TodoProvider } from './contexts'
import { TodoContext } from './contexts'
import { useEffect } from 'react'
import { use } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodo] = useState([])


  const addTodo = (msg) => {
    setTodo((prev) => [{ id: Date.now(), ...msg }, ...prev])
   // setTodo(todo)  it will replace all the previos values and start to add so we use previous data 
  //  ...prev  = stores the shallow copy of the array 
  // {it is a todo it is a object in Todolist settig id , storing data}
  }

  const updateTodo = (id, msg) => {
    setTodo((prev) => prev.map((data) => data === id ? msg : data))

 // 

  }
  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((data) => data.id !== id))
  }

  const toggleComplete = (id) => {
    setTodo((prev) => prev.map((data) => data.id === id ? { ...data, completed: !data.completed } : data))
  }

  useEffect (()=>{
    const ltodos = JSON.parse(localStorage.getItem("todoitem"))
    if(ltodos && ltodos.length >0 )
    {
      return setTodo(ltodos)
    }
  },[])
  // here using another use effect is if we pass dependcy in todos in first UE it will get run infinite loope
  useEffect (()=>{
    localStorage.setItem("todoitem" ,JSON.stringify(todos))  // from state 
  },[todos])
   return (

    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }} >
        
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo    goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here 
             key is mandetory her otherwise  it will not fetch correct values */  }

            {todos.map((t)=>( // in every todos object will map ther and pass to the
              <div className='w-full' key={t.id} >  
                <TodoItem todo={t}/>
                </div>
              ))} 
           </div>
        </div>
      </div>    
      </TodoProvider>
  )
}

export default App
