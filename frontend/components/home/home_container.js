import Home from './home_page';
import { connect } from 'react-redux';
import { fetchHomeNews } from '../../actions/news_actions';
import { fetchIntraday } from '../../actions/stock_actions';



const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  news: state.entities.news,
});

const mapDispatchToProps = dispatch => ({
  fetchHomeNews: () => dispatch(fetchHomeNews()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
