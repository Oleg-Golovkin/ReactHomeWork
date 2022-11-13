import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    modeMenu: "horizontal",
    media576px: "",
    mediaMin577px: "",
    media767px: "",
    media992px: ""
}

const mediaSlice = createSlice({
name: "change",
initialState,
reducers: 
        {          
            changeMedia576px: (state, action) =>  {
                state.media576px = action.payload
            },
            changeMediaMin577px: (state, action) =>  {
                state.mediaMin577px = action.payload
            },
            changeMedia767px: (state, action) =>  {
                state.media767px = action.payload
            },
            changeMedia992px: (state, action) =>  {
                state.media992px = action.payload
            },
        }    
})

const {actions, reducer} = mediaSlice;

export const   {changeMedia576px,
                changeMediaMin577px,
                changeMedia767px,
                changeMedia992px} = actions;
                
export default reducer
