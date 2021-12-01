import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { reducer } from "./app/models/rootReducer";
import { handler as currenciesSaga } from "./app/models/currencies/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(currenciesSaga);

export {store};
