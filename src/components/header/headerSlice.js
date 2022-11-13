import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    headerMenu: [
        "главная",
        "аукцион",
        "о проекте",
        "партнерам",
        "контакты"
    ],
    countriesAnyDropdown: [
        "США",
        "Россия",
        "Канада",
        "Китай"
    ],
    countriesSelected: "Выбор региона",
}

const headerSlice = createSlice({
name: "on",
initialState,
reducers: 
        {
            onCountriesSelected: (state, action) =>  {
                state.countriesSelected = action.payload
            },
        }
    
})

const {actions, reducer} = headerSlice;

export const {onCountriesSelected} = actions;
export default reducer
