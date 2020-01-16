import * as StockApiUtil from '.././util/stock_api_util';



export const RECEIVE_COMPANY_INFO = 'RECEIVE_COMPANY_INFO';
export const RECEIVE_STOCKS_1Y = 'RECEIVE_STOCKS_1Y';
export const RECEIVE_INTRADAY = 'RECEIVE_INTRADAY';

const receiveCompanyInfo = stock => ({
  type: RECEIVE_COMPANY_INFO,
  stock
});

const receiveStocks1y = stock => ({
  type: RECEIVE_STOCKS_1Y,
  stock
});

const receiveIntraday = stock => ({
  type: RECEIVE_INTRADAY,
  stock
});

export const fetchCompanyInfo = ticker => dispatch => (
  StockApiUtil.fetchCompanyInfo(ticker) // fetch from API
    .then(stock => dispatch(receiveCompanyInfo(stock))) // send to frontend
);

export const fetchStocks1y = ticker => dispatch => (
  StockApiUtil.fetchStocks1y(ticker) 
    .then(stock => dispatch(receiveStocks1y(stock))) 
);

export const fetchIntraday = ticker => dispatch => (
  StockApiUtil.fetchIntraday(ticker) 
    .then(stock => dispatch(receiveIntraday(stock))) 
);