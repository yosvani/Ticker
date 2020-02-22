import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Link } from 'react-router-dom';
import CustomStockTooltip from './custom_stock_tooltip';

const StockTableItem = props => {
  const {stock, currentUser, fetchIntraday } = props;

  let stockName = stock.ticker;
  let stockShares = stock.shares;

  let data = [];
  let prices = [];
  let neg = "+"

  for (let i = 0; i < stock.intraday.length; i++) {
    if (!stock.intraday[i].close) {
      continue;
    } else {
      data.push({
        open: stock.intraday[i].open,
        close: stock.intraday[i].close,
      });
      prices.push(stock.intraday[i].close);
    }
  }

  let openPrice = data[0].open;
  let currPrice = data[data.length - 1].close;
  let priceFlux = Math.abs(currPrice - openPrice).formatMoney(2);
  let priceFluxPercentage = Math.abs(priceFlux / openPrice).toFixed(2);
  let min = Math.min(...prices);
  let max = Math.max(...prices);
  if (priceFlux < 0) { neg = "-"; }

  return (
    <div className="stock-portfolio-item">
      <div className="stock-title">
          <span>{stockName}</span><br />
          {stockShares} shares
      </div>

      <div className="stock-portfolio-chart">
        <LineChart width={80} height={40} data={data} className="mini-chart">
          <Line type="linear" dataKey="close" dot={false} strokeWidth={1} stroke="#21ce99" />
          <YAxis hide={true} domain={[min, max]} />
        </LineChart>
      </div>

      <div className="stock-price">
        ${currPrice.formatMoney(2)}
      </div>
    </div>
  )
}

export default StockTableItem;


