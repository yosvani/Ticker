import { connect } from 'react-redux';
import { fetchAll, fetchCompanyInfo, fetchIntraday, fetchNews } from '../../actions/stock_actions';
// import { fetchNews } from '../../actions/news_actions';
import StockShow from './stock_show_page';



const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  ticker: ownProps.match.params.ticker.toUpperCase(),
  // stock: state.entities.stock[ownProps.match.params.ticker],
  company: state.entities.stock['company'],
  intraday: state.entities.stock['intraday'],
  news: state.entities.stock['news']
});

const mapDispatchToProps = dispatch => ({
  fetchAll: ticker => dispatch(fetchAll(ticker)),
  fetchIntraday: ticker => dispatch(fetchIntraday(ticker)),
  fetchCompanyInfo: ticker => dispatch(fetchCompanyInfo(ticker)),
  fetchNews: ticker => dispatch(fetchNews(ticker))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockShow);
