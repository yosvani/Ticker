import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import stockReducer from './stock_reducer';

export default combineReducers({
  users: usersReducer,
  stock: stockReducer
});
