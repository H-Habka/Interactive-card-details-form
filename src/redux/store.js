import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";

const rootReducer = combineReducers({
    Slice
})


export const store = configureStore({
    reducer : rootReducer
})