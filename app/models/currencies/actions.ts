const GET_ASSETS_INFO_SUCCESS = 'GET_ASSETS_INFO_SUCCESS';
const GET_ASSETS_INFO_REQUEST = 'GET_ASSETS_INFO_REQUEST';

export {
    GET_ASSETS_INFO_SUCCESS,
    GET_ASSETS_INFO_REQUEST
}

export const getCurrencies = () => ({type: GET_ASSETS_INFO_REQUEST});
export const setCurrencies = (data: Array<object>) => ({type: GET_ASSETS_INFO_SUCCESS, payload: data });