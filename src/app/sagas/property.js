import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';

import {
    FETCH_PROPERTY,
    FETCH_PROPERTY_SUCCESS,
    FETCH_PROPERTY_FAILED,
} from './types';

const API = 'http://localhost:8080/api';

function* fetchProperty_async({ payload }) {
    try {
        let property = yield call(
            [axios, axios.get],
            `${API}/property/${payload}`
        );

        property = yield property.data;

        if (property.statusCode === 200) {
            yield put({
                type: FETCH_PROPERTY_SUCCESS,
                payload: property,
            });
        } else {
            yield put({
                type: FETCH_PROPERTY_FAILED,
                payload: 'Error Occured',
            });
        }
    } catch (error) {
        yield put({
            type: FETCH_PROPERTY_FAILED,
            payload: error,
        });
    }
}

export function* WATCH_fetchProperty() {
    yield takeEvery(FETCH_PROPERTY, fetchProperty_async);
}
