import { UPDATE_ALL_RATES } from "./actions";

const initialState = {
    data: {}
}

const reducer = (state = initialState, action: {payload: object, type: string}) => {
    switch (action.type){
        case UPDATE_ALL_RATES: {
            // console.log('action.payload', action.payload)

           return { data: { ...state.data, ...action.payload }};
        }
        default: return state;
    }
};

export {reducer};