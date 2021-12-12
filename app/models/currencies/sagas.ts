import { call, put, takeEvery } from 'redux-saga/effects';
import { store } from '../../../store';
import { getAllCurrencies } from '../../api/getAllCurrencies';
import { ICurrencyItem } from '../../entities/ICurrencyItem';
import { GET_ASSETS_INFO_REQUEST, GET_ASSETS_INFO_SUCCESS, SET_UPDATED_CURRENCY, UPDATE_CURRENCY_RATE } from './actions';

export function* handler(){
    yield takeEvery(GET_ASSETS_INFO_REQUEST, getAllCurrenciesInfo);
    yield takeEvery(UPDATE_CURRENCY_RATE, updateCurrencyRate);
}

function* getAllCurrenciesInfo(){
    const response = yield call(getAllCurrencies);
    yield put({type: GET_ASSETS_INFO_SUCCESS, payload: response?.data});
}

function* updateCurrencyRate(action: {payload: object, type: string}){
    const data = store.getState();
    const newData = changeCurrency(data?.currencies?.data, action.payload);
    yield put({type: SET_UPDATED_CURRENCY, payload: newData});
}

const changeCurrency  = (data: Array<ICurrencyItem>, rates: object) => {
    const newData = data.map(rate =>
        !!rates[rate.id]
          ? { ...rate, priceUsd: rates[rate.id] }
          : rate
      );
    return newData;
}