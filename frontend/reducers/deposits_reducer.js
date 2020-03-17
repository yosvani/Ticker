import { RECEIVE_DEPOSITS } from '../actions/deposits_actions';

const depositsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_DEPOSITS:
      // nextState['deposits'] = action.deposits;
      // return nextState;
    return action.deposits;
    // return Object.assign({}, state, { [action.user.id]: action.deposit });

    default:
      return state;
  }
};

export default depositsReducer;
