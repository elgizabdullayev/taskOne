import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllCurrencies } from '../../api';
import { GET_ASSETS_INFO_REQUEST, GET_ASSETS_INFO_SUCCESS } from './actions';

function* handler(){
    yield takeEvery(GET_ASSETS_INFO_REQUEST, getAllCurrenciesInfo);
}

function* getAllCurrenciesInfo(action: {payload: object, type: string}){
    const response = yield call(getAllCurrencies);
    // console.log('respo', response)
    yield put({type: GET_ASSETS_INFO_SUCCESS, payload: response?.data})
}

export {handler};