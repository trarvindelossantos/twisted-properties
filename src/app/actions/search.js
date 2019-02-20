import { SEARCH_BEGIN, SEARCH_CLEAR, SET_PROPERTY_ADDRESS } from './types';

export const searchProperty = query => {
    return dispatch => {
        dispatch({ type: SEARCH_BEGIN, payload: query });
    };
};

export const searchClear = () => {
    return dispatch => {
        dispatch({ type: SEARCH_CLEAR });
    };
};

export const setAddress = address => {
    return dispatch => {
        dispatch({ type: SET_PROPERTY_ADDRESS, payload: address });
    };
};
