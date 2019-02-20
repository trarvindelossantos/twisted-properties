import { all } from 'redux-saga/effects';
import { WATCHER_search } from './search';
import { WATCHER_login } from './login';
import { WATCHER_fetchProperty } from './property';

export default function* super_saga() {
    yield all([WATCHER_search(), WATCHER_login(), WATCHER_fetchProperty()]);
}
