import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import useTransform from '../../service/useTransform'


const initialState = {
    lots: [],
    imgLoadingStatus: '',
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
