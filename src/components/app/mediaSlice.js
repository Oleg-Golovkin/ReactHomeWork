import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    modeMenu: "horizontal",
    media576px: "",    
    media767px: "",
    media992px: "",    
    mediaMin577px: "",
    mediaMin766px: "",
}

const mediaSlice = createSlice({
name: "change",
initialState,
reducers: 
        {          
            changeMedia576px: (state, action) =>  {
                state.media576px = action.payload
            },            
            changeMedia767px: (state, action) =>  {
                state.media767px = action.payload
            },
            changeMedia992px: (state, action) =>  {
                state.media992px = action.payload
            },
            changeMediaMin577px: (state, action) =>  {
                state.mediaMin577px = action.payload
            },
            changeMediaMin766px: (state, action) =>  {
                state.mediaMin766px = action.payload
            },


        }    
})

const {actions, reducer} = mediaSlice;

export const   {changeMedia576px,               
                changeMedia767px,
                changeMedia992px,
                changeMediaMin577px,
                changeMediaMin766px} = actions;
                
export default reducer
