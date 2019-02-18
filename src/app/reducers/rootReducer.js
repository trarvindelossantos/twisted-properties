import { combineReducers } from 'redux';

import search_reducer from './search';
import login_reducer from './login';
import property_reducer from './property';

const rootReducer = combineReducers({
    search_reducer,
    login_reducer,
    property_reducer,
});
export default rootReducer;
