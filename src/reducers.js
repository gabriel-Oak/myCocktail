import { combineReducers } from 'redux';

import listReducer from './pages/List/listReducer';
import mainReducer from './pages/mainReducer';

const reducers = combineReducers({
  listReducer,
  mainReducer
});

export default reducers;
