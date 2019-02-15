import { FETCH_PROPERTY } from './types';

export const fetchProperty = property_id => {
    return dispatch => {
        dispatch({
            type: FETCH_PROPERTY,
            payload: property_id,
        });
    };
};
