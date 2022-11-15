import headerSlice from "../components/header/headerSlice";
import mediaSlice from "../components/app/mediaSlice";
import hamburgerSlice from "../components/hamburger/hamburgerSlice";

import { combineReducers } from 'redux'



export default combineReducers({
    headerSlice,
    mediaSlice,
    hamburgerSlice
})