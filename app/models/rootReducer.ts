import { combineReducers } from "redux";
import { reducer as currenciesReducer } from "./currencies/reducers";

export const reducer = combineReducers({
    currencies: currenciesReducer,
});