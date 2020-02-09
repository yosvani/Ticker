import React from 'react';
import StockNews from './stock_news';
import StockCompany from './stock_company';
import StockChart from './stock_chart';
import StockTransactions from './stock_transactions';


class StockShow extends React.Component {
  componentDidMount() {
    // this.props.fetchIntraday(this.props.ticker);
    // this.props.fetchCompanyInfo(this.props.ticker);
    // this.props.fetchNews(this.props.ticker);
    const ticker = this.props.match.params.ticker;
    this.props.fetchAll(ticker);

  }

  componentDidUpdate(prevProps) {
    // if (prevProps.match.params.ticker !== this.props.match.params.ticker) {
    //   // this.props.fetchIntraday(this.props.ticker);
    //   // this.props.fetchCompanyInfo(this.props.ticker);
    //   // this.props.fetchNews(this.props.ticker);
    //   this.props.fetchAll(this.props.ticker);
    // }
    if ((this.props.match.params.ticker !== prevProps.match.params.ticker)) {
      const ticker = this.props.match.params.ticker;
      this.props.fetchAll(ticker);
    }
  }

  render() {
    const { news, company, ticker, intraday } = this.props;
    
    if (!this.props.company || !this.props.news || !this.props.intraday) return null;
    
    return (
      <div className="stock-show-page">
       
        <div className="stock-chart">
          <StockChart company={company} ticker={ticker} intraday={intraday} />
        </div>

        <div className="stock-company">
          <StockCompany company={company} />
        </div>

        <div className="stock-news">
          <StockNews news={news} />
        </div>

        <div className="stock-transactions">
          <StockTransactions ticker={ticker} intraday={intraday}/>
        </div>

      </div>
    )
  } 
};


export default StockShow;

