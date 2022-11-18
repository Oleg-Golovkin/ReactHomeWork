import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import useTransform from '../../service/useTransform'


const initialState = {
    img: "d",
    imgLoadingStatus: ''
}

export const reduxThunkImg = createAsyncThunk(
    "heroes/reduxThunkImg",
    async () => {
        const {resPostAllCharacter} = useTransform();
        return await resPostAllCharacter();
    }
)

const lotsSlice = createSlice({
name: "on",
initialState,
extraReducers: (builder) => {
    builder
        .addCase(reduxThunkImg.pending, state =>    
            {state.imgLoadingStatus = 'loading'})

        .addCase(reduxThunkImg.fulfilled, (state, action) => {
            state.imgLoadingStatus = 'idle';
            state.img = action.payload;
        })                            
        .addCase(reduxThunkImg.rejected, state => {
            state.imgLoadingStatus = 'error';
        })    
        .addDefaultCase(() => {})
    }
})

const {reducer} = lotsSlice;

export default reducer
