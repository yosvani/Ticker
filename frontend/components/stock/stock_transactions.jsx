import React from 'react';

class StockTransactions extends React.Component {
  constructor(props) {
    super(props);
    const { ticker, intraday, currentUser } = this.props;
    let currentPrice = intraday[intraday.length-1].close;
    
    this.state = {
      user_id: currentUser.id,
      ticker,
      price: currentPrice,
      shares: 0,
      order_type: 'buy',
      cost: '0.00',
      submitted: ''
    };

    this.update = this.update.bind(this);
    this.updateType = this.updateType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.ticker !== prevProps.ticker) {
      const { ticker, intraday } = this.props;
      let currentPrice = intraday[intraday.length - 1].close;
      
      this.setState({ ticker: ticker, price: currentPrice });
    }
  }

  update(e) {
    this.setState({ shares: e.target.value });
    this.updateCost(e.target.value);
  }

  updateCost(shares) {
    // if (shares === '') {
    //   shares = '0';
    //   this.setState({ cost: '0.00' });
    // } else {
      let cost = (shares * this.state.price).formatMoney(2);
      this.setState({ cost: cost });
    // }
  }

  updateType(order_type) {
    this.setState({ order_type });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });

    let { user_id, ticker, price, shares, order_type } = this.state;
    let transaction = {
      user_id,
      ticker,
      price,
      shares,
      order_type
    };

    this.props.createTransaction(transaction)
      .fail(() => this.setState({ submitted: '' }));
  }

  renderLimit() {
    const { currentUser, stock } = this.props;
    let shares = 0;
    for (let i = 0; i < currentUser.stocks.length; i++) {
      let currStock = currentUser.stocks[i];
      if (currStock.symbol === stock.ticker) {
        shares = currStock.shares;
        break;
      }
    }
    return this.state.order_type === 'buy' ? (
      <div className="buying-power">
        <h4>${currentUser.buyingPower.formatMoney()} Buying Power Available</h4>
      </div>
    ) : (
        <div className="buying-power">
          <h4>{shares} Shares Available</h4>
        </div>
      );
  }

  renderLimit() {
    const { currentUser, transactions, deposits, ticker } = this.props;

    let shares = 0;
    for (let i = 0; i < transactions.length; i++) {
      let currTransaction = transactions[i];
      if (currTransaction.ticker === ticker && currTransaction.order_type === 'buy') {
        shares += currTransaction.shares;
      } else if (currTransaction.ticker === ticker && currTransaction.order_type === 'sell') {
        shares -= currTransaction.shares;
      }
    }
    
    return this.state.order_type === 'buy' ? (
      <div className="buying-power">
        <h4>${currentUser.buyingPower.formatMoney()} Buying Power Available</h4>
      </div>
    ) : (
      <div className="buying-power">
        <h4>{shares} Shares Available</h4>
      </div>
    );
  }

  render() {
    console.log(this.props.currentUser.buyingPower, 'buyingoiwer');
    console.log(this.props.currentUser.stocksOwned, 'stockowned');
    console.log(Object.entries(this.props.currentUser.stocksOwned), 'new');


    return (
      <div className="transactions-table">

        <div className="transactions-header">
          <h3>
            <a className="header-buy" onClick={() => this.updateType('buy')}>Buy {`${this.props.ticker.toUpperCase()}`}</a>
            <a className="header-sell" onClick={() => this.updateType('sell')}>Sell {`${this.props.ticker.toUpperCase()}`}</a>
          </h3>
        </div>

        <div className='transactions-content'>

          <form onSubmit={this.handleSubmit}>
            <div className="content-shares">
              <p>Shares</p>
              <input type='text' placeholder='0' value={this.state.shares} onChange={this.update} />
            </div> 

            <div className='content-price'>
              <p>Market Price</p>
              <p>${this.state.price.formatMoney(2)}</p>
            </div>

            <div className='content-cost'>
              <p>Estimated Cost</p>
              <p>${this.state.cost}</p>
            </div>

            <div className='transaction-errors'>
              <ul>
                {this.props.errors.map((error, i) => (
                  <li key={`error-${i}`}>
                    {/* <img src={window.images.error} className="exclamation" /> */}
                    {error}
                  </li>
                ))}
              </ul>
            </div>

            <div className='transactions-button'>
              <input type="submit" value={`SUBMIT ${this.state.order_type.toUpperCase()}`} disabled={this.state.submitted} />
            </div>
            
            {this.renderLimit()}
            
          </form>
        </div>
      </div>
    );
  }
}

export default StockTransactions;