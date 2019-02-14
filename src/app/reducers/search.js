import {
    SEARCH_BEGIN,
    SEARCH_SUCCESS,
    SEARCH_FAILED,
    SEARCH_CLEAR,
} from '../actions/types';

const search_state = {
    searching: false,
    hasSuggestion: false,
    suggestions: [],
    error: {
        flag: false,
        message: '',
    },
};

const search_reducer = (state = search_state, action) => {
    switch (action.type) {
        case SEARCH_BEGIN:
            state = {
                ...state,
                searching: true,
                hasSuggestion: false,
                error: {},
            };
            break;
        case SEARCH_SUCCESS:
            state = {
                ...state,
                searching: false,
                hasSuggestion: action.payload.suggestions ? true : false,
                suggestions: action.payload.suggestions,
            };
            break;
        case SEARCH_FAILED:
            state = {
                ...state,
                searching: false,
                hasSuggestion: false,
                suggestions: [],
                error: {
                    flag: true,
                    message: action.payload,
                },
            };
            break;
        case SEARCH_CLEAR:
            state = {
                ...state,
                searching: false,
                hasSuggestion: false,
                suggestions: [],
                error: {},
            };
            break;
        default:
            return state;
    }

    return state;
};

export default search_reducer;
