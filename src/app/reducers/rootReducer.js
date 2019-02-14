import { combineReducers } from 'redux';

import search_reducer from './search';
import login_reducer from './login';

const rootReducer = combineReducers({
    search_reducer,
    login_reducer,
});
export default rootReducer;
