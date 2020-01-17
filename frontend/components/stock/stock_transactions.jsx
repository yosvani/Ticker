import React from 'react'

class StockTransactions extends React.Component {
  render() {
    const { ticker } = this.props;

    return (
      <div className="transactions-table">

        <div className="header">
          <h3>Buy {ticker.toUpperCase()}</h3>
          <h3>Sell {ticker.toUpperCase()}</h3>
        </div>
        
        <div className="content">
          <div className="shares">
            <p>Shares</p>
            <input type="text" className="input-share" />
          </div>
          <div className="market-price">
            <p>Market Price</p>
            <p>$311.92</p>
          </div>
        </div>

            <p>Estimated Cost</p>

        <div className="button">
          <button to="" className="button-submit">SUBMIT BUY</button>
        </div>

        <div className="buying-power">
          <p>Buying Power Available</p>
        </div>

      </div>
    )
  }
}

export default StockTransactions;

