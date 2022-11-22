import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    time: "",
    deadline: [
        "2022-12-07",
        "2022-12-06",
        "2022-12-05",
        "2022-12-04",
        "2022-12-03",
        "2022-12-02",
        "2022-12-01",
        "2022-11-30",
        "2022-12-31",
        "2022-12-25",
    ]
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
