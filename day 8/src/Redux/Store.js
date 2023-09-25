import { configureStore,combineReducers } from "@reduxjs/toolkit";
import AdminReducer from './Redux';
const reducer=combineReducers({
    admininfo:AdminReducer
})
export const Store=configureStore({
    reducer,
})