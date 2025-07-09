import {createSlice} from '@reduxjs/toolkit'
import authService from '../appwrite/auth'
import config from '../config/config'
 
export const initialState = {

    status : false,
    userData : null
}

export const authSlice = createSlice({
    name : 'Auth',
    initialState,
    reducers :{
         login : (state,action)=>{
            state.status = true,
            state.userData = action.payload.userData
         },
         logOut :(state)=>{ // optional 
            state.status = true
            state.userData = null
         },
        //  post :(state,action)=>{
        //     state.allPosts = true,
        //     state.userPosts = action.payload.userData
        //  }
        }
    
})

export const {login,logOut} = authSlice.actions
export default authSlice.reducer;