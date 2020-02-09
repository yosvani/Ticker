import * as StockApiUtil from '.././util/stock_api_util';

export const RECEIVE_INTRADAY = 'RECEIVE_INTRADAY';
export const RECEIVE_COMPANY_INFO = 'RECEIVE_COMPANY_INFO';
export const RECEIVE_NEWS = 'RECEIVE_NEWS';

const receiveIntraday = stock => ({
  type: RECEIVE_INTRADAY,
  stock
});

const receiveCompanyInfo = stock => ({
  type: RECEIVE_COMPANY_INFO,
  stock
});

const receiveNews = news => ({
  type: RECEIVE_NEWS,
  news
});

export const fetchAll = ticker => dispatch => {
  Promise.all([
    dispatch(fetchIntraday(ticker)),
    dispatch(fetchCompanyInfo(ticker)),
    dispatch(fetchNews(ticker)),
  ]);
};

export const fetchIntraday = ticker => dispatch => (
  StockApiUtil.fetchIntraday(ticker) 
    .then(stock => dispatch(receiveIntraday(stock))) 
);

export const fetchCompanyInfo = ticker => dispatch => (
  StockApiUtil.fetchCompanyInfo(ticker) 
    .then(stock => dispatch(receiveCompanyInfo(stock))) 
);
  
export const fetchNews = ticker => dispatch => (
  StockApiUtil.fetchNews(ticker) // fetch from API
    .then(news => dispatch(receiveNews(news.articles))) // send to frontend
);