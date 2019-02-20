import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

//saga
import super_saga from './app/sagas/super_saga';
// import { WATCHER_search } from './app/sagas/search';
// import { WATCHER_login } from './app/sagas/login';
// import { WATCH_fetchProperty } from './app/sagas/property';
// import { fetchCompanies_watcher, showCompany_watcher } from './sagas/company.saga';
//reducer
import rootReducer from './app/reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
    rootReducer,
    // compose(
    //     window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //         window.__REDUX_DEVTOOLS_EXTENSION__(),
    //     applyMiddleware(createLogger(), thunk, sagaMiddleware)
    // )
    // // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // //     window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(createLogger(), thunk, sagaMiddleware)
);

// const finalCreateStore = compose(
//     window.devToolsExtension ? window.devToolsExtension() : f => f
// )(createStore);

sagaMiddleware.run(super_saga);
// sagaMiddleware.run(WATCHER_search);
// sagaMiddleware.run(WATCHER_login);
// sagaMiddleware.run(WATCH_fetchProperty);
//
