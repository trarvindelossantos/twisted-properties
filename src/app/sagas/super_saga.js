import { all, takeEvery } from 'redux-saga/effects';
import { WATCHER_search } from './search';
import { WATCHER_login } from './login';

export default function* super_saga() {
    yield all({
        WATCHER_search,
        WATCHER_login,
    });
}
