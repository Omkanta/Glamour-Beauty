import {  combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { reducer as ProductReducer } from "./reducer";
import thunk from "redux-thunk"



const MainReducer = combineReducers({
    ProductReducer
});

export const store = legacy_createStore(MainReducer,applyMiddleware(thunk));
