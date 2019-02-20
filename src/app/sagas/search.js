import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import { SEARCH_BEGIN, SEARCH_SUCCESS, SEARCH_FAILED } from '../actions/types';

// const BASE_URI =
//     'https://property-uat-api.corelogic.asia/bsg-au/v1/suggest.json';
const API = 'http://10.0.16.239:8080/api';

function* searchProperty_async(action) {
    try {
        const suggestions = yield axios.get(`${API}/suggestions`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('tp_token')}`,
            },
            params: {
                q: action.payload,
                suggestionTypes: 'address',
            },
        });

        console.log(suggestions);
        if (suggestions.status === 200) {
            yield put({
                type: SEARCH_SUCCESS,
                payload: suggestions.data,
            });
        } else {
            yield put({
                type: SEARCH_FAILED,
                payload: 'Error Occurred',
            });
        }
    } catch (error) {
        yield put({
            type: SEARCH_FAILED,
            payload: error.response,
        });
    }
}

export function* WATCHER_search() {
    yield takeLatest(SEARCH_BEGIN, searchProperty_async);
}
