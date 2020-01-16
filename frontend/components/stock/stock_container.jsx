import { connect } from 'react-redux';
import { fetchCompanyInfo, fetchStocks1y, fetchIntraday } from '../../actions/stock_actions';
import { fetchNews } from '../../actions/news_actions';
import StockShow from './stock_show_page';



const mapStateToProps = (state, ownProps) => ({
  ticker: ownProps.match.params.ticker,
  company: state.entities.stock[ownProps.match.params.ticker.toUpperCase()],
  oneYear: state.entities.stock['oneYear'],
  intraday: state.entities.stock['intraday'],
  news: state.entities.news
});

const mapDispatchToProps = dispatch => ({
  fetchCompanyInfo: ticker => dispatch(fetchCompanyInfo(ticker)),
  fetchStocks1y: ticker => dispatch(fetchStocks1y(ticker)),
  fetchIntraday: ticker => dispatch(fetchIntraday(ticker)),
  fetchNews: () => dispatch(fetchNews())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockShow);
