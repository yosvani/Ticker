import { 
  RECEIVE_COMPANY_INFO,
  RECEIVE_NEWS,
  RECEIVE_INTRADAY
} from '../actions/stock_actions';



const stocksReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_COMPANY_INFO:
      nextState['company'] = action.stock;
      return nextState;
    case RECEIVE_INTRADAY:
      nextState['intraday'] = action.stock;
      return nextState;
    case RECEIVE_NEWS:
      nextState['news'] = action.news;
      return nextState;
    default:
      return state;
  }
}

export default stocksReducer;

//lower level state doesn't have access to the remainder of the state,
//only to it's own slice