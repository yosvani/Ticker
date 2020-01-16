import React from 'react';
import StockNews from './stock_news';
import StockCompany from './stock_company';
import StockChart from './stock_chart';
import StockTransactions from './stock_news';


class StockShow extends React.Component {
  componentDidMount() {
    this.props.fetchCompanyInfo(this.props.ticker);
    // this.props.fetchStocks1y(this.props.ticker);
    this.props.fetchIntraday(this.props.ticker);
    this.props.fetchNews();
  }

  //staying on same component but there is additional logic
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.ticker != this.props.match.params.ticker) {
      this.props.fetchCompanyInfo(this.props.ticker);
      // this.props.fetchStocks1y(this.props.ticker);
      this.props.fetchIntraday(this.props.ticker);
      this.props.fetchNews();

    }
  }

  render() {
    const { news, company, ticker, oneYear, intraday } = this.props;

    //use promise.all here
    if (!this.props.company || !this.props.news || !this.props.intraday) return null; //render, componentidmount, render
    
    return (
      <div className="stock-show-page">
       
        <div className="stock-chart">
          <StockChart company={company} ticker={ticker} oneYear={oneYear} intraday={intraday} />
        </div>

        <div className="stock-company">
          <StockCompany company={company} />
        </div>

        <div className="stock-news">
          <StockNews news={news} />
        </div>

        <div className="stock-transactions">
          <StockTransactions ticker={ticker} />
        </div>

      </div>
    )
  } 
};


export default StockShow;

