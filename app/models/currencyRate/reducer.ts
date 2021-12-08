import { SET_CURRENCY_RATE } from "./actions";

const initialState = {
    data: ''
}

const reducer = (state = initialState, action: {payload: object, type: string}) => {
    switch (action.type){
        case SET_CURRENCY_RATE: {
           return { data: action.payload };
        }
        default: return state;
    }
};

export {reducer};