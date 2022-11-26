import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    rangeItems: [
    ],
}


const rangeSlice = createSlice({
name: "on",
initialState
})

const {reducer} = rangeSlice;

export default reducer
