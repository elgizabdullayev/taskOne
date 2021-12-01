import { combineReducers } from "redux";
import { reducer as currenciesReducer } from "./currencies/reducers";
import { reducer as ratesReducer } from "./rates/reducers";

const reducer = combineReducers({
    currencies: currenciesReducer,
    rates: ratesReducer,
});

export {reducer};