import React from 'react';

class StockTransactions extends React.Component {
  constructor(props) {
    super(props);
    let { ticker, intraday } = this.props;
    
    let currentPrice;
    for (let i = intraday.length - 1; i > 0; i--) {
      currentPrice = intraday[i].close;
    };

    this.state = {
      ticker: this.props.ticker,
      price: currentPrice,
      shares: '',
      order_type: 'buy',
      cost: '0.00',
      submitted: ''
    };
    
    this.update = this.update.bind(this);
    this.updateType = this.updateType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  // componentDidUpdate(prevProps) {
  //   if (this.props.stock.ticker !== prevProps.stock.ticker) {
  //     const intradayData = this.props.stock.intradayData;
  //     let currPrice = this.props.stock.openPrice;
  //     for (let i = intradayData.length - 1; i > 0; i--) {
  //       if (intradayData[i].average !== -1) {
  //         currPrice = Math.round(intradayData[i].average * 100) / 100;
  //         break;
  //       }
  //     }

  //     this.setState({ ticker: this.props.stock.ticker, currPrice });
  //   }
  // }

  update(e) {
    this.setState({ shares: e.target.value });
    this.updateCost(e.target.value);
  }

  updateCost(shares) {
    if (shares === '') {
      shares = '0';
      this.setState({ cost: '0.00' });
    } else {
      let cost = (shares * this.state.price).formatMoney(2);
      this.setState({ cost: cost });
    }
  }

  updateType(order_type) {
    this.setState({ order_type });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });

    let { ticker, shares, order_type, price } = this.state;
    let transaction = {
      ticker,
      shares,
      order_type,
      price
    };

    this.props.createTransaction(transaction)
      .fail(() => this.setState({ submitted: '' }));
  }

  // renderLimit() {
  //   const { currentUser, ticker } = this.props;
  //   let shares = 0;
  //   for (let i = 0; i < currentUser.stocks.length; i++) {
  //     let currStock = currentUser.stocks[i];
  //     if (currStock.symbol === ticker) {
  //       shares = currStock.shares;
  //       break;
  //     }
  //   }
  //   return this.state.order_type === 'buy' ? (
  //     <div className="buying-power">
  //       <h4>${currentUser.buyingPower.formatMoney()} Buying Power Available</h4>
  //     </div>
  //   ) : (
  //     <div className="selling-power">
  //       <h4>{shares} Shares Available</h4>
  //     </div>
  //   );
  // }

  render() {
    const { currentUser, ticker, intraday, errors } = this.props;

    return (
      <div className="transactions-table">

        <div className="transactions-header">
          <h3>
            <a className="header-buy" onClick={() => this.updateType('buy')}>Buy {`${this.props.ticker.toUpperCase()}`}</a>
            <a className="header-sell" onClick={() => this.updateType('sell')}>Sell {`${this.props.ticker.toUpperCase()}`}</a>
            {/* {this.renderSellButton()} */}
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

            {/* <div className='transaction-errors'>
              <ul>
                {
                  errors.map((error, idx) => <li key={idx}><img src={window.images.exclamation_circle} />{error}</li>)
                }
              </ul>
            </div> */}

            <div className='transactions-button'>
              <input type="submit" value={`SUBMIT ${this.state.order_type.toUpperCase()}`} disabled={this.state.submitted} />
            </div>
            
            {/* {this.renderLimit()} */}

          </form>
        </div>
      </div>
    );
  }
}

export default StockTransactions;