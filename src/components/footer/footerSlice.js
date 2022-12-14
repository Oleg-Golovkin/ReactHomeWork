import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    footerNav: [
        "главная",
        "аукцион",
        "о проекте",
        "партнерам",
        "контакты",
        "новости",
        "FAQ",
        "реклама",
        "соглашение",
        "регистрация",
        "услуги",
    ],
}

const footerSlice = createSlice({
name: "on",
initialState,
})

const {reducer} = footerSlice;

export default reducer
