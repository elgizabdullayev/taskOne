const SET_CURRENCY_RATE = 'SET_CURRENCY_RATE';


export {
    SET_CURRENCY_RATE,
}

export const setCurrencyRate = (data: string) => ({type: SET_CURRENCY_RATE, payload: data });