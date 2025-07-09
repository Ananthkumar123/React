
import { useContext, createContext } from 'react'

export const TodoContext = createContext({

    todos: [{  // what are the fields requrie to perfom operation
        id: 1,
        msg: "Todo msg",
        completed: false

    }],
    addTodo: (msg) => { },   //methods to perform for the  
    updateTodo: (id, ) => {},
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }

})

export const useTodo = () => {  // cutom hook start with lowercase and use keyword
    
    return useContext(TodoContext)
    
}
export const TodoProvider = TodoContext.Provider