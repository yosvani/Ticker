import { connect } from 'react-redux';
import { fetchStock } from '../../actions/stock_actions';
import StockShow from './stock_show';


const mapStateToProps = (state, ownProps) => ({
  ticker: ownProps.match.params.ticker
});

const mapDispatchToProps = dispatch => ({
  fetchStock: ticker => dispatch(fetchStock(ticker))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockShow);
