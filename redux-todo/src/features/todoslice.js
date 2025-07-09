
import { createSlice, nanoid } from "@reduxjs/toolkit";
 

export const initialState = {

    todosData: [{ id: 1, text: 'ananth' }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todosData.push(todo)
        },
        removeTodo: (state, action) => {
            state.todosData = state.todosData.filter((data) => data.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions
// export each functionallites to use another component

export default todoSlice.reducer
//export whole mainslice to change state in the store 