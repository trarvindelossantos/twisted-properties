import {
    FETCH_PROPERTY,
    FETCH_PROPERTY_SUCCESS,
    FETCH_PROPERTY_FAILED,
} from './types';

const property_state = {
    fetching: false,
    isSelected: false,
    error: {
        flag: false,
        message: '',
    },
    property: [],
};

const property_reducer = (state = property_state, { type, payload }) => {
    switch (type) {
        case FETCH_PROPERTY:
            state = {
                fetching: true,
                isSelected: false,
                error: {
                    flag: false,
                    message: '',
                },
                property: [],
            };
            break;
        case FETCH_PROPERTY_SUCCESS:
            state = {
                ...state,
                fetching: false,
                isSelected: true,
                property: payload,
            };
        case FETCH_PROPERTY_FAILED:
            state = {
                ...state,
                error: {
                    flag: true,
                    message: payload,
                },
            };
        default:
            return state;
    }
    return state;
};

export default property_reducer;
