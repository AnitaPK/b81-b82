import { createSlice } from "@reduxjs/toolkit"


const initialState = {value:0}

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increament:(state)=>{
            state.value += 1
        },
        decreament:(state)=>{
            state.value -=1
        },
        reset:(state)=>{
            state.value = 0
        },
        increamentByAmount:(state, action)=>{
            state.value += action.payload
        }
    }
})

export const{
    increament, decreament, reset, increamentByAmount
} = counterSlice.actions

export default counterSlice.reducer