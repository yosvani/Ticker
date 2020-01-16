import { 
  RECEIVE_COMPANY_INFO,
  RECEIVE_STOCKS_1Y,
  RECEIVE_INTRADAY
} from '../actions/stock_actions';



const stocksReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_COMPANY_INFO:
      nextState[action.stock.symbol] = action.stock;
      return nextState;
    case RECEIVE_STOCKS_1Y:
      nextState['oneYear'] = action.stock;
      return nextState;
    case RECEIVE_INTRADAY:
      nextState['intraday'] = action.stock;
      return nextState;
    default:
      return state;
  }

}

export default stocksReducer;

//lower level state doesn't have access to the remainder of the state,
//only to it's own slice