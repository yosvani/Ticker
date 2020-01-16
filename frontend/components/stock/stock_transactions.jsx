import React from 'react'

class StockTransactions extends React.Component {
  render() {
    const { ticker } = this.props;

    return (
      <div className="table">

        <div className="header">
          {/* <h3>Buy {ticker}</h3>
          <h3>Sell {ticker}</h3> */}
        </div>

        <div className="content">
          <p>Shares</p>
          <p>Market Price</p>
          <p>Estimated Cost</p>
        </div>

        <div className="button">
          <button to="">SUBMIT BUY</button>
        </div>

        <div className="buying-power">
          <p>Buying Power Available</p>
        </div>

      </div>
    )
  }
}

export default StockTransactions;

