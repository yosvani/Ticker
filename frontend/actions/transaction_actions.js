import * as TransactionApiUtil from '../util/transaction_api_util';

export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';
export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';
export const RECEIVE_TRANSACTION_ERRORS = 'RECEIVE_TRANSACTION_ERRORS';

const receiveTransaction = transaction => ({
  type: RECEIVE_TRANSACTION,
  transaction
});

const receiveTransactions = transactions => ({
  type: RECEIVE_TRANSACTIONS,
  transactions
});

const receiveErrors = errors => ({
  type: RECEIVE_TRANSACTION_ERRORS,
  errors
});


export const createTransaction = transactionForm => dispatch => {
  return TransactionApiUtil.createTransaction(transactionForm)
    .then(transaction => {
      dispatch(receiveTransaction(transaction));
      window.location.reload();
    })
    .fail(errors => {
      dispatch(receiveErrors(errors.responseJSON));
  })
};

export const fetchTransactions = () => dispatch => {
  return TransactionApiUtil.fetchTransactions()
    .then(transactions => {
      dispatch(receiveTransactions(transactions))
  })
};

  
