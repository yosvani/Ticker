import * as DepositApiUtil from '../util/deposit_api_util';

export const RECEIVE_DEPOSITS = 'RECEIVE_DEPOSITS';

const receiveDeposits = deposits => ({
  type: RECEIVE_DEPOSITS,
  deposits
});

export const fetchDeposits = () => dispatch => {
  return DepositApiUtil.fetchDeposits()
    .then(deposits => {
      dispatch(receiveDeposits(deposits))
    })
};

