import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    time: {
        t: '',
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
    }
}

const timerSlice = createSlice({
name: "on",
initialState,
reducers: 
        {
            onT: (state, action) =>  {
                state.time.t = action.payload
            },
            onDays: (state, action) =>  {
                state.time.days = action.payload
            },
            onHours: (state, action) =>  {
                state.time.hours = action.payload
            },
            onMinutes: (state, action) =>  {
                state.time.minutes = action.payload
            },
            onSeconds: (state, action) =>  {
                state.time.seconds = action.payload
            },
        }
    
})

const {actions, reducer} = timerSlice;

export const {onT,
            onDays,
            onHours,
            onMinutes,
            onSeconds} = actions;
export default reducer
