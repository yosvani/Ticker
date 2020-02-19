import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Link } from 'react-router-dom';
import CustomStockTooltip from './custom_stock_tooltip';

class StockChart extends React.Component {

  render() {
    const { company, intraday } = this.props;

    let data = [];
    let prices = [];
    let neg = "+"

    for (let i = 0; i < intraday.length; i++) {
      if (!intraday[i].close) {
        continue;
      } else {
        data.push({
          time: intraday[i].label,
          open: intraday[i].open,
          close: intraday[i].close,
        });
        prices.push(intraday[i].close);
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
      <div className="stock-chart">

        <div className="chart">
          <div className='chart-details'>
            <h1>{company.companyName}</h1>
            <h1 id="stock-price">${currPrice.formatMoney(2)}</h1> 
            <h4 id="stock-price-flux">{neg}${priceFlux} ({neg}{priceFluxPercentage}%)</h4>
          </div>
          
          <div className="rechart">
            <LineChart width={680} height={200} data={data} 
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type="linear" dataKey="close" dot={false} strokeWidth={2} stroke="#21ce99" /> 
              <YAxis 
                hide={true}
                domain={[min, max]}
                />
              <Tooltip 
                content={<CustomStockTooltip price={currPrice} priceFlux={priceFlux} priceFluxPercentage={priceFluxPercentage} neg={neg}/>}
                offset={-30}
                position={{ y: -17 }}
                isAnimationActive={false}
                />
            </LineChart>
          </div>
        </div>

        <br />

        <div className="dateview">
          <Link to="">1D</Link>
          <Link to="">1W</Link>
          <Link to="">1M</Link>
          <Link to="">3M</Link>
          <Link to="">1Y</Link>
          <Link to="">5Y</Link>
        </div>
      </div>
    )
  }
}

export default StockChart;


