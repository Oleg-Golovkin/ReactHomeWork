import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    time: "",
}

const timerSlice = createSlice({
name: "on",
initialState,
reducers: 
        {
            onTime: (state, action) =>  {
                state.time = action.payload
            }
        }
    
})

const {actions, reducer} = timerSlice;

export const {onTime} = actions;
export default reducer
