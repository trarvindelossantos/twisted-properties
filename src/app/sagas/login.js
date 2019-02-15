import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/types';

const BASE_URI = 'http://localhost:8080/api';

function* login_async() {
    try {
        const login = yield call([axios, axios.get], `${BASE_URI}/auth/login`);

        if (login.status === 200) {
            yield put({
                type: LOGIN_SUCCESS,
                payload: login.data,
            });
        } else {
            yield put({
                type: LOGIN_FAILED,
                payload: 'Error Occurred',
            });
        }
    } catch (error) {
        yield put({
            type: LOGIN_FAILED,
            payload: error,
        });
    }
}

export function* WATCHER_login() {
    yield takeEvery(LOGIN, login_async);
}
