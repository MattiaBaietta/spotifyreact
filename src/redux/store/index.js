import { configureStore,combineReducers } from "@reduxjs/toolkit";
import  favouritesReducer from "../reducer/favourite";
import  songReducer from "../reducer/song";

const bigReducer = combineReducers({
    favourites:favouritesReducer,
    song:songReducer,
})


const store=configureStore({
    reducer:bigReducer
})


export default store