import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    itemsRange: [
        {name: 'Часы', clazz: 'times'},
        {name:'Ювелирные изделия', clazz: "jewelry"},
        {name:'Автотранспорт и лодки', clazz: "transport"},
        {name:'Аксуссуары', clazz: "accessories"},
        {name:'Недвижимость', clazz: "real-estate"},
        {name:'Hi-Tech', clazz: "hi-Tech"},
        {name:'Одежда и обувь', clazz: "clothes"},
        {name:'Предметы искусства', clazz: "art"},
        {name:'АЛкоголь и еда', clazz: "food"},
    ],
}


const rangeSlice = createSlice({
name: "on",
initialState
})

const {reducer} = rangeSlice;

export default reducer
