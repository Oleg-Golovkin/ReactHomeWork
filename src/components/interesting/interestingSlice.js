import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import useTransform from '../../service/useTransform'


const initialState = {
    quotes: [
        {name: "Марк Твен", 
        data: "1935 -1910", 
        content: `«Легче одурачить людей, 
        чем убедить их в том, что они одурачены»`},
        {name: "Марк Твен", 
        data: "1935 -1910", 
        content: `«Легче одурачить людей, 
        чем убедить их в том, что они одурачены»`},
        {name: "Марк Твен", 
        data: "1935 -1910", 
        content: `«Легче одурачить людей, 
        чем убедить их в том, что они одурачены»`},
    ],
}

const interestingSlice = createSlice({
name: "on",
initialState,
})

const {reducer} = interestingSlice;

export default reducer
