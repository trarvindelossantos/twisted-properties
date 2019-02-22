import { FETCH_PROPERTY } from './types';

export const fetchProperty = (property_id, address) => {
    const _payload = {
        id: property_id,
        address: address,
    };
    return dispatch => {
        dispatch({
            type: FETCH_PROPERTY,
            payload: _payload,
        });
        //dispatch({ type: SET_PROPERTY_ADDRESS, payload: address });
    };
};
