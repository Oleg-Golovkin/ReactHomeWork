import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import useTransform from '../../service/useTransform'


const initialState = {
    lots: [],
    imgLoadingStatus: ''
}

export const reduxThunkImg = createAsyncThunk(
    "on/reduxThunkImg",
    async () => {
        const {resPostAllCharacter} = useTransform();
        return await resPostAllCharacter();
    }
)

const lotsSlice = createSlice({
name: "on",
initialState,
reducers: 
    {
        onYears: (state, action) =>  {
            state.years = action.payload
        },
    },
extraReducers: (builder) => {
    builder
        .addCase(reduxThunkImg.pending, state =>    
            {state.imgLoadingStatus = 'loading'})

        .addCase(reduxThunkImg.fulfilled, (state, action) => {
            state.imgLoadingStatus = 'idle';
            state.lots = action.payload;
        })                            
        .addCase(reduxThunkImg.rejected, state => {
            state.imgLoadingStatus = 'error';
        })    
        .addDefaultCase(() => {})
    }
})

const {actions, reducer} = lotsSlice;
export const {onTimer} = actions;

export default reducer
