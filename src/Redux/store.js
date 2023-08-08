import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as AuthReducer} from "../Redux/AuthReducer/reducer"
import {reducer as CartReducer} from "../Redux/CartReducer/reducer"
import {reducer as ProductReducer} from "../Redux/ProductReducer/reducer"

const rootReducer=combineReducers({AuthReducer, CartReducer, ProductReducer})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));