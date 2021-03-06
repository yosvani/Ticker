import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import stockReducer from './stock_reducer';
import newsReducer from './news_reducer';
import transactionsReducer from './transactions_reducer';
import depositsReducer from './deposits_reducer';

export default combineReducers({
  users: usersReducer,
  stock: stockReducer,
  news: newsReducer,
  transactions: transactionsReducer,
  deposits: depositsReducer
});
