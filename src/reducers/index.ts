import { combineReducers } from 'redux';
import WeekReducer from './week';
import PagesReducer from './pages';

const root = combineReducers({week : WeekReducer, pages : PagesReducer});

export default root;

export type RootState = ReturnType<typeof root>;