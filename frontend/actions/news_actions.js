import * as NewsApiUtil from '.././util/news_api_util';



export const RECEIVE_NEWS = 'RECEIVE_NEWS';

const receiveNews = news => ({
  type: RECEIVE_NEWS,
  news
});

export const fetchNews = ticker => dispatch => (
  NewsApiUtil.fetchNews(ticker) // fetch from API
    .then(news => dispatch(receiveNews(news.articles))) // send to frontend
);

export const fetchPortfolioNews = () => dispatch => (
  NewsApiUtil.fetchPortfolioNews() 
    .then(news => dispatch(receiveNews(news.articles))) 
);