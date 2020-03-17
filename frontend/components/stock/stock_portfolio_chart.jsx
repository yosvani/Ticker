import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Link } from 'react-router-dom';
import CustomStockTooltip from './custom_stock_tooltip';

class PortfolioChart extends React.Component {

  render() {
    const { currentUser } = this.props;
    let portfolio = currentUser.portfolio[7].intraday;
    let multiplier = 250.99;

    let data = [];
    let prices = [];
    let neg = "+"

    for (let i = 0; i < portfolio.length; i++) {
      if (!portfolio[i].close) {
        continue;
      } else {
        data.push({
          time: portfolio[i].label,
          open: portfolio[i].low * multiplier,
          close: portfolio[i].high * multiplier,
        });
        prices.push(portfolio[i].close * multiplier);
      }
    }

    let openPrice = data[0].open;
    let currPrice = data[data.length - 1].close.formatMoney(2);
    let currPrice2 = data[data.length - 1].close
    let priceFlux = Math.abs(currPrice2 - openPrice).formatMoney(2);
    let priceFlux2 = Math.abs(currPrice2 - openPrice);
    let priceFluxPercentage = ((Math.abs(priceFlux2 / openPrice)) * 100).toFixed(2);
    let min = Math.min(...prices);
    let max = Math.max(...prices);
    if (priceFlux < 0) { neg = "-"; }

    return (
      <div className="stock-chart">

        <div className="chart">
          <div className='chart-details2'>
            <h1 id="stock-price" className="homepage-price">${currPrice}</h1>
            <h4 id="stock-price-flux">{neg}${priceFlux} ({neg}{priceFluxPercentage}%)</h4>
          </div><br /><br />

          <div className="rechart">
            <LineChart width={680} height={250} data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type="linear" dataKey="close" dot={false} strokeWidth={2} stroke="#21ce99" />
              <YAxis
                hide={true}
                domain={[min, max]}
              />
              <Tooltip
                content={<CustomStockTooltip price={currPrice} priceFlux={priceFlux} priceFluxPercentage={priceFluxPercentage} neg={neg} />}
                offset={-30}
                position={{ y: -17 }}
                isAnimationActive={false}
              />
            </LineChart>
          </div>
        </div>
        <br />

        <div className="dateview">
          <p>1D</p>
          <p>1W</p>
          <p>1M</p>
          <p>3M</p>
          <p>1Y</p>
          <p>5Y</p>
        </div>
      </div>
    )
  }
}

export default PortfolioChart;


    // let portfolio = currentUser.portfolio;
    // let dataObj = {};
    // let prices = [];
    // let neg = "+";

    // for (let i = 0; i < portfolio.length; i++) {
    //   for (let j = 0; j < portfolio[i].intraday.length; j++) {
    //     let stock = portfolio[i].intraday[j];
    //     if (!stock.close) {
    //       continue;
    //     } else if (dataObj.hasOwnProperty(stock.label)) {
    //       dataObj[stock.label].open = dataObj[stock.label].open + (stock.low * portfolio[i].shares);
    //       dataObj[stock.label].close = dataObj[stock.label].close + (stock.high * portfolio[i].shares);
    //     } else {
    //       dataObj[stock.label] = {};
    //       dataObj[stock.label].time = stock.label;
    //       dataObj[stock.label].open = stock.low;
    //       dataObj[stock.label].close = stock.high;
    //     }
    //   }
    // }

    // let dataArr = Object.values(dataObj);
    // let data = dataArr.sort((a,b) => (a.time > b.time) ? 1 : -1);