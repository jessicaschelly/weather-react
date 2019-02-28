import articleReducer from './articleReducer';
import categoryReducer from './categoryReducer';
import { combineReducers } from 'redux';
export const Reducers = combineReducers({
    articleReducer: articleReducer,
    categoryReducer: categoryReducer
});