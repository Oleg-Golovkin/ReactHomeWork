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
    modeMenu: "horizontal"
}

const headerSlice = createSlice({
name: "on",
initialState,
reducers: 
        {
            onCountriesSelected: (state, action) =>  {
                state.countriesSelected = action.payload
            },
            onChangeModeMenu: (state, action) =>  {
                state.modeMenu = action.payload
            },
        
        
        }
    
})

const {actions, reducer} = headerSlice;

export const {onCountriesSelected, onChangeModeMenu} = actions;
export default reducer
