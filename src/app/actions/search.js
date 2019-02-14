import { SEARCH_BEGIN, SEARCH_CLEAR } from './types';

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
