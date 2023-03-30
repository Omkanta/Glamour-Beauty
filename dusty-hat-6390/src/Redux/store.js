import {  combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { reducer as ProductReducer } from "./reducer";
import thunk from "redux-thunk"
import {reducer as AdminReducer} from "./AdminReducer/reducer"


const MainReducer = combineReducers({
    ProductReducer,AdminReducer
});

export const store = legacy_createStore(MainReducer,applyMiddleware(thunk));
