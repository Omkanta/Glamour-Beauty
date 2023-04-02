import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { reducer as ProductReducer } from "./reducer";
import thunk from "redux-thunk";
import { reducer as AdminReducer } from "./AdminReducer/reducer";
import { reducer as authReducer } from "./authReducer/reducer";

const MainReducer = combineReducers({
  ProductReducer,
  AdminReducer,
  authReducer,
});

export const store = legacy_createStore(MainReducer, applyMiddleware(thunk));
