import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Link } from 'react-router-dom';
import CustomStockTooltip from './custom_stock_tooltip';

class StockChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currValue: this.props.intraday[0].close,
    }

    // this.handleMouseOver = this.handleMouseOver.bind(this);
  }
  
  
  render() {
    const { ticker, company, oneYear, intraday } = this.props;

    // let currPrice = 0;
    // let priceFlux = 0;
    // let priceFluxPercentage = 0;
    // let openPrice = 0;
    // let neg = 0;

    return (
      <div className="stock-chart">

        <div className="chart">
          <div className='chart-details'>
            <h1>{company.companyName}</h1>
            <h1 id="stock-price">{this.state.currValue}</h1> 
            <h4 id="stock-price-flux">placeholder</h4>
          </div>
          
          <div className="rechart">
            <LineChart width={680} height={200} data={intraday} 
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type="linear" dataKey="close" dot={false} strokeWidth={2} stroke="#21ce99" /> */}
              <YAxis 
                hide={true}
                domain={[315, 317]}
                
                />
              <Tooltip 
                content={<CustomStockTooltip />}
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



// handleMouseOver(e) {
//   if (e) {
//     this.setState({
//       currValue: e.activePayload[0].value
//     })
//   }
// }


        // handleMouseOver(e) {
        //   window.active = e.activePayload;
        //   if (e) {
        //     this.setState({
        //       currValue: e.activePayload[0].value
        //     })
        //   }
        // }
        
        // onMouseOver = { this.handleMouseOver } 