import { connect } from 'react-redux';
import StockShow from './stock_show_page';
import { fetchAll, fetchCompanyInfo, fetchIntraday, fetchNews } from '../../actions/stock_actions';
import { createTransaction, fetchTransactions } from '../../actions/transaction_actions';
import { fetchDeposits } from '../../actions/deposits_actions';



const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  ticker: ownProps.match.params.ticker.toUpperCase(),
  company: state.entities.stock['company'],
  intraday: state.entities.stock['intraday'],
  news: state.entities.stock['news'],
  errors: state.errors.transaction,
  transactions: state.entities.transactions,
  deposits: state.entities.deposits[0]
});

const mapDispatchToProps = dispatch => ({
  fetchAll: ticker => dispatch(fetchAll(ticker)),
  fetchIntraday: ticker => dispatch(fetchIntraday(ticker)),
  fetchCompanyInfo: ticker => dispatch(fetchCompanyInfo(ticker)),
  fetchNews: ticker => dispatch(fetchNews(ticker)),
  createTransaction: transaction => dispatch(createTransaction(transaction)),
  fetchTransactions: () => dispatch(fetchTransactions()),
  fetchDeposits: () => dispatch(fetchDeposits())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockShow);
