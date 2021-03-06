import { RECEIVE_TRANSACTIONS } from '../actions/transaction_actions';

const transactionsReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = Object.assign([], state)

  switch (action.type) {
    case RECEIVE_TRANSACTIONS:
      return action.transactions;
    default:
      return state;
  }
};

export default transactionsReducer;
