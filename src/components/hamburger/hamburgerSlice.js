import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    activeClass: false,
}

const hamburgerSlice = createSlice({
name: "on",
initialState,
reducers: 
        {
            onActiveClass: (state, action) =>  {
                state.activeClass = action.payload
            },
        }
    
})

const {actions, reducer} = hamburgerSlice;

export const {onActiveClass} = actions;
export default reducer
