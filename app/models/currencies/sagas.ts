import { useSelector } from 'react-redux';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllCurrencies } from '../../api';
import { GET_ASSETS_INFO_REQUEST, GET_ASSETS_INFO_SUCCESS, UPDATE_CURRENCY_RATE } from './actions';

function* handler(){
    yield takeEvery(GET_ASSETS_INFO_REQUEST, getAllCurrenciesInfo);
    yield takeEvery(UPDATE_CURRENCY_RATE, updateCurrencyRate)
}

function* getAllCurrenciesInfo(action: {payload: object, type: string}){
    const response = yield call(getAllCurrencies);
    // console.log('respo', response)
    yield put({type: GET_ASSETS_INFO_SUCCESS, payload: response?.data})
}

function* updateCurrencyRate(action: {payload: object, type: string}){
    const data = useSelector((state: any) => state.currencies);

}

const changeCurrency(data: Array<object>)

export {handler};