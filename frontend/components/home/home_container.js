import Home from './Home';
import { connect } from 'react-redux';
import { fetchPortfolioNews } from '../../actions/news_actions';



const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  news: state.entities.news
});

const mapDispatchToProps = dispatch => ({
  fetchPortfolioNews: () => dispatch(fetchPortfolioNews())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
