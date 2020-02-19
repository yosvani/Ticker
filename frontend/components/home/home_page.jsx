import React from 'react';
import HomeNews from './news';
import HomeStocks from '../stock/stock_portfolio';
import Splash from './splash_page';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchHomeNews();
  }

  render() {
    const { currentUser, news, intraday } = this.props;
    
    const homepage = currentUser ? (

      <div className="home-page">
        <div className="home-stocks">
          <HomeStocks currentUser={currentUser} intraday={intraday} />
        </div>
        <div className="home-news">
          <HomeNews news={news} />
        </div>
      </div>
    
    ) : (

      <div><Splash /></div>
      
    )

    return (
      <div>
        {homepage}
      </div>
    )
  } 
};


export default Home;

