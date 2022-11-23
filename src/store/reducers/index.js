import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { bookReducer } from './book.reducer';
import { moduleReducer } from './module.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    book: bookReducer,
    module: moduleReducer
});

export default rootReducer;