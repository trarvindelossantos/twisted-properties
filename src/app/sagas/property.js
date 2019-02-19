import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

import {
    FETCH_PROPERTY,
    FETCH_PROPERTY_SUCCESS,
    FETCH_PROPERTY_FAILED,
} from '../actions/types';

const API = 'http://10.0.16.239:8080/api';

function* fetchProperty_async({ payload }) {
    try {
        // let property = yield call(
        //     [axios, axios.get],
        //     `${API}/property/${payload}`
        // );

        let property = yield axios.get(`${API}/property/${payload}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });

        if (property.status === 200) {
            yield put({
                type: FETCH_PROPERTY_SUCCESS,
                payload: property.data.property,
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
