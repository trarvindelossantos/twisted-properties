import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import super_saga from './app/sagas/super_saga';
import rootReducer from './app/reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [createLogger(), thunk, sagaMiddleware];

export const saveToLocalStorage = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (error) {
        console.log(error);
    }
};

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;

        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};
const persistedState = loadFromLocalStorage();

const ehancers = compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, persistedState, ehancers);
store.subscribe(() => saveToLocalStorage(store.getState()));
sagaMiddleware.run(super_saga);

export default store;
