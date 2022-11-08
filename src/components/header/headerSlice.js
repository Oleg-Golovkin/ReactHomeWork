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
    countriesSelected: "Выбор страны"
}

const headerSlice = createSlice({
name: "on",
initialState,
reducers: {
        onCountriesSelected: (state, action) =>  {
            state.countriesSelected = action.payload
        },
    }
    
})

const {actions, reducer} = headerSlice;

export const {onHeaderMenuActive, onCountriesSelected} = actions;
export default reducer
