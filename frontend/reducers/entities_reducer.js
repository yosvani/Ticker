import { combineReducers } from 'redux';

import userReducers from './users_reducer';

const entitiesReducer = combineReducers({
  users: userReducers
});

export default entitiesReducer;
