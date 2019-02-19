import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGIN_PERSIST,
} from '../actions/types';

const login_state = {
    logged_in: false,
    error: '',
};

const login_reducer = (state = login_state, { type, payload }) => {
    switch (type) {
        case LOGIN:
            //clear localstorage
            localStorage.clear();
            state = {
                ...state,
                logged_in: false,
            };
            break;
        case LOGIN_PERSIST:
            state = {
                ...state,
                logged_in: true,
            };
            break;
        case LOGIN_SUCCESS:
            //store token to localstorage
            const token = payload.access_token;
            localStorage.setItem('tp_token', token);
            state = {
                ...state,
                logged_in: true,
            };
            break;
        case LOGIN_FAILED:
            //remove token from localstorage
            localStorage.removeItem(token);
            state = {
                ...state,
                logged_in: false,
                error: payload,
            };
            break;
        default:
            return state;
    }
    return state;
};

export default login_reducer;
