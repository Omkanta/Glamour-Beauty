import {  combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { reducer as ProductReducer } from "./reducer";
import { reducer as authReducer } from "./authReducer/reducer";
import thunk from 'redux-thunk'



const MainReducer = combineReducers({
    ProductReducer,
    authReducer
});

export const store = legacy_createStore(MainReducer,applyMiddleware(thunk));
