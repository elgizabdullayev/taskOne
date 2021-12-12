import { combineReducers } from "redux";
import { reducer as currenciesReducer } from "./currencies/reducers";

const reducer = combineReducers({
    currencies: currenciesReducer,
});

export {reducer};