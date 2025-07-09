import React from 'react'
import { useState } from 'react';
import { useTodo,TodoContext } from '../contexts';

function TodoForm() {
    
    const [todo ,setTodo] =useState("")
    const {addTodo} =useTodo()

    const add = (e)=>{
        e.preventDefault()  // u will get todo 
        if(!todo) return 'this is went wrong in adding'

        addTodo({todo , completed:false})  // appjsx refernce 
        // {id: Dadte.now(),todo: todo ,completed :false }
        //if field and value namse are same use todo : todo = todo 
        setTodo("") // setting empty 
    }

    return (
        <form  className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} // wiring Controlled by React	, UI always in sync with state	
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

