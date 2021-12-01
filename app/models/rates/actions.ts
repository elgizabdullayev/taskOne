const UPDATE_ALL_RATES = 'UPDATE_ALL_RATES';

export {
    UPDATE_ALL_RATES
}

export const updateAllRates = (data: object) => ({type: UPDATE_ALL_RATES, payload: data});
