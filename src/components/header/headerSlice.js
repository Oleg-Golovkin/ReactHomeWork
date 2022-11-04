import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    headerMenu: [
        "главная",
        "аукцион",
        "о проекте",
        "партнерам",
        "контакты"
    ]
}

const headerSlice = createSlice({
name: "on",
initialState,
reducers: {
    onHeaderMenuActive: (state, action) =>  {
        state.headerMenuActive = action.payload
        },
    }   
    
})

const {actions, reducer} = headerSlice;

export const {onHeaderMenuActive} = actions;
export default reducer
