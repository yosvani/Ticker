import React from 'react';
import StockNews from './stock_news';
import StockCompany from './stock_company';
import StockChart from './stock_chart';
import StockTransactions from './stock_transactions';


class StockShow extends React.Component {
  componentDidMount() {
    this.props.fetchIntraday(this.props.ticker);
    this.props.fetchCompanyInfo(this.props.ticker);
    this.props.fetchNews(this.props.ticker);
    this.props.fetchTransactions();
    this.props.fetchDeposits();
    // this.props.fetchAll(ticker);
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.ticker !== this.props.ticker) {
        this.props.fetchIntraday(this.props.ticker);
        this.props.fetchCompanyInfo(this.props.ticker);
        this.props.fetchNews(this.props.ticker);
        this.props.fetchTransactions();
        this.props.fetchDeposits();
        // this.props.fetchAll(this.props.ticker);
    }
  }
    
  render() {
    const { currentUser, ticker, company, intraday, news, errors, transactions, deposits, createTransaction} = this.props;
    
    //this only works for the first render, need to figure out to how to create a promise
    if ( !this.props.currentUser || !this.props.ticker || !this.props.company || !this.props.intraday || !this.props.news || !this.props.errors || !this.props.transactions || !this.props.deposits) return null;
    
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
          <StockTransactions ticker={ticker} intraday={intraday} createTransaction={createTransaction} currentUser={currentUser} errors={errors} transactions={transactions} deposits={deposits} />
        </div>

      </div>
    )
  } 
};


export default StockShow;


  // if ((this.props.match.params.ticker !== prevProps.match.params.ticker)) {
  //     const ticker = this.props.match.params.ticker;
  //     this.props.fetchAll(ticker);
  //     this.props.fetchTransactions();
  //     this.props.fetchDeposits();
  //   }
  // }