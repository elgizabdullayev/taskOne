const GET_ASSETS_INFO_SUCCESS = 'GET_ASSETS_INFO_SUCCESS';
const GET_ASSETS_INFO_REQUEST = 'GET_ASSETS_INFO_REQUEST';
const UPDATE_CURRENCY_RATE = 'UPDATE_CURRENCY_RATE';
const SET_UPDATED_CURRENCY = 'SET_UPDATED_CURRENCY';

export {
    GET_ASSETS_INFO_SUCCESS,
    GET_ASSETS_INFO_REQUEST,
    UPDATE_CURRENCY_RATE, 
    SET_UPDATED_CURRENCY
}

export const getCurrencies = () => ({type: GET_ASSETS_INFO_REQUEST});
export const setCurrencies = (data: Array<object>) => ({type: GET_ASSETS_INFO_SUCCESS, payload: data })
export const setUpdatedCurrency = (data: Array<object>) => ({type: SET_UPDATED_CURRENCY, payload: data})
