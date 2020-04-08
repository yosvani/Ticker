import React from 'react';

class StockTransactions extends React.Component {
  constructor(props) {
    super(props);
    const { ticker, intraday, currentUser } = this.props;
    let currentPrice = intraday[intraday.length-1].high;

    this.state = {
      user_id: currentUser.id,
      ticker,
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

  componentWillMount() {
    // if (this.state.price !== this.props.intraday[this.props.intraday.length - 1].close) {
      let intraday = this.props.intraday;
      let currPrice = intraday[intraday.length-1].close; //array(390)
      this.setState({ price: currPrice });
    // }
  }

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
    const { currentUser, transactions, ticker } = this.props;

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
        <h4>${currentUser.buyingPower.formatMoney(2)} Buying Power Available</h4>
      </div>
    ) : (
      <div className="buying-power">
        <h4>{shares} Shares Available</h4>
      </div>
    );
  }

  render() {

    return (
      <div className="transactions-table">

        <div className="transactions-header">
          <h3>    
          <a id='first' className={this.state.order_type === 'buy' ? 'active' : ''} onClick={() => this.updateType('buy')}>Buy {`${this.props.ticker.toUpperCase()}`}</a>
          <a className={this.state.order_type === 'sell' ? 'active' : ''} onClick={() => this.updateType('sell')}>Sell {`${this.props.ticker.toUpperCase()}`}</a>
          </h3>
        </div>
        
        <div className='transactions-content'>

          <form onSubmit={this.handleSubmit}>
            <div className="content-shares">
              <p>Shares</p>
              <input type='text' className='shares' placeholder='0' value={this.state.shares} onChange={this.update} />
            </div> 

            <div className='content-price'>
              {/* <p>Market Price</p> */}
              {/* <p>${this.state.price.formatMoney(2)}</p> */}
            </div>

            <div className='content-cost'>
              <p>Estimated Cost</p>
              <p>${this.state.cost}</p>
            </div>

            <div className='content-errors'>
              <ul>
                {this.props.errors.map((error, i) => (
                  <li key={`error-${i}`}>
                    <img src={window.images.error} className="exclamation" />
                    {error}
                  </li>
                ))}
              </ul>
            </div>

            <div className='content-button'>
              <input type="submit" className="submit" value={`SUBMIT ${this.state.order_type.toUpperCase()}`} disabled={this.state.submitted} />
            </div>

            <div className='content-limit'>
              {this.renderLimit()}
            </div>
            
          </form>
        </div>
      </div>
    );
  }
}

export default StockTransactions;