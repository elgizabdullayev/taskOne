import { combineReducers } from "redux";
import { reducer as currenciesReducer } from "./currencies/reducers";
import { reducer as ratesReducer } from "./rates/reducers";
import { reducer as currencyRateReducer } from "./currencyRate/reducer"

const reducer = combineReducers({
    currencies: currenciesReducer,
    rates: ratesReducer,
    currencyRate: currencyRateReducer,
});

export {reducer};