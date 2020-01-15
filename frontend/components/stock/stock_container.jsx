import { connect } from 'react-redux';
import { fetchCompanyInfo, fetchStocks1y } from '../../actions/stock_actions';
import StockShow from './stock_show';



const mapStateToProps = (state, ownProps) => ({
  ticker: ownProps.match.params.ticker,
  company: state.entities.stock[ownProps.match.params.ticker.toUpperCase()],
  oneYear: state.entities.stock['oneYear']
  // oneyear: state.enti
});

const mapDispatchToProps = dispatch => ({
  fetchCompanyInfo: ticker => dispatch(fetchCompanyInfo(ticker)),
  fetchStocks1y: ticker => dispatch(fetchStocks1y(ticker))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockShow);
