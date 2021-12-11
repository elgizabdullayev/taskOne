import { GET_ASSETS_INFO_SUCCESS, SET_UPDATED_CURRENCY } from "./actions";

const initialState = {
    data: []
}

const reducer = (state = initialState, action: {payload: object, type: string}) => {
    switch (action.type){
        case GET_ASSETS_INFO_SUCCESS: {
            // console.log('aaaaaaaaaaaaaa', action.payload)
           return { data: action.payload };
        }
        case SET_UPDATED_CURRENCY: {
            // console.log('aaaaaaaaaaaaaa', action.payload)
           return { data: action.payload };
        }

        default: return state;
    }
};

export {reducer};