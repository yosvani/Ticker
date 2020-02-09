import React from 'react';
import HomeNews from './home_news';
// import StockCompany from './stock_company';
// import StockChart from './stock_chart';


class Home extends React.Component {
  componentDidMount() {
    // this.props.fetchCompanyInfo(this.props.ticker);
    // this.props.fetchIntraday(this.props.ticker);
    this.props.fetchPortfolioNews();
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.match.params.ticker !== this.props.match.params.ticker) {
  //     this.props.fetchIntraday(this.props.ticker);
  //     this.props.fetchCompanyInfo(this.props.ticker);
  //     this.props.fetchNews(this.props.ticker);
  //   }
  // }

  render() {
    // const { news, company, ticker, intraday } = this.props;
    const { news } = this.props;
    
    // if (!this.props.company || !this.props.news || !this.props.intraday) return null;
    
    return (
      <div className="home-page">
       
      {/* //   <div className="portfolio-chart">
      //     <PortfolioChart company={company} ticker={ticker} intraday={intraday} />
      //   </div> */}


      <div className="home-news">
        <HomeNews news={news} />
      </div>


      </div>
    )
  } 
};


export default Home;

